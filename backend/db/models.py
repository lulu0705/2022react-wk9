from .database import Base
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey


class DbCard(Base):
    __tablename__ = 'card'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    content = Column(String)
    description = Column(String)
    # owner_id = Column(Integer, ForeignKey('user.id'))
    # owner = relationship('DbUser',back_populates='created_products')


# class DbUser(Base):
#     __tablename__ = 'user'
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String)
#     email = Column(String)
#     password = Column(String)
#     is_admin = Column(Boolean)
#     created_products = relationship('DbUser',back_populates='owner')

