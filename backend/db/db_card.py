from fastapi import HTTPException, status
from router.schemas import CardRequestSchema
from sqlalchemy import func
from sqlalchemy.orm.session import Session

from .cards import cards

from db.models import DbCard

def db_feed(db: Session):
    new_card_list = [DbCard(
        title=card["title"],
        author=card["author"],
        content=card["content"],
        description=card["description"]
        # owner_id=product["owner_id"]
    ) for card in cards]
    db.query(DbCard).delete()
    db.commit()
    db.add_all(new_card_list)
    db.commit()
    return db.query(DbCard).all()

def create(db: Session, request: CardRequestSchema) -> DbCard:
    new_card = DbCard(
        title = request.title,
        author = request.author,
        content = request.content,
        description = request.description
        # owner_id=request.owner_id
    )
    db.add(new_card)
    db.commit()
    db.refresh(new_card)
    return new_card


def get_all(db: Session) -> list[DbCard]:
    return db.query(DbCard).all()

# def get_card_by_id(card_id: int, db: Session):
#     card = db.query(DbCard).filter(DbCard.id == card_id).first()
#     if not card:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'Card with id = {id} not found')
#     return card


def get_card_by_id(card_id: int, db: Session) -> DbCard:
    card = db.query(DbCard).filter(DbCard.id == card_id).first()
    if not card:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Card with id = {card_id} not found')
    return card


# def get_product_by_category(category: str, db: Session) -> list[DbProduct]:
#     product = db.query(DbProduct).filter(func.upper(DbProduct.category) == category.upper()).all()
#     if not product:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f'Product with category = {category} not found')
#     return product