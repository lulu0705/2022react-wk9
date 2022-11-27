import { Card } from "antd"
import { Link,createRoot } from 'react-router-dom';

export default function ProductItem({ card }) {
    return (
          <div className="site-card-border-less-wrapper">
            <Card
            //  title={card.title}
            //   bordered={false}
              className="card-title"
              style={{
                width: 600,
                // borderRadius:5,
                // borderBottomColor:'#b5aec4',
                // boxShadow: (20,20,50,'black'),
              }}
            >
              {/* <p className="card-author">By <b>{card.author}</b></p>
              <p className="card-content">{card.content}</p>
              
              <div className="card-more">
                    <Link to={`/card/${card.id}`} className="card-link">
                    <Link to={`/cards/id/${card.id}`} className="card-link"> 
                        <b><u>More</u></b>
                    </Link>
                </div> */}
            

            <div className="col-12">
        <div className="card card-margin">
            <div className="card-header no-border">
                <h3 className="card-title" style={{color:'#8C6875'}}><b>{card.title}</b></h3>
                
            </div>
            {/* <hr style={{width:'100%',color: '#b5aec4'}}/> */}
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        {/* <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div> */}
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">By {card.author}</span>
                        </div>
                    </div>
                    <div className="widget-49-meeting-points">
                        <span className="widget-49-meeting-item">{card.content}</span>
                    </div>
                    <div className="card-more card-buttom">
                    {/* <Link to={`/card/${card.id}`} className="card-link"> */}
                    <Link to={`/cards/id/${card.id}`} className="card-link"> 
                        <b><u>More</u></b>
                    </Link>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    </Card>
          </div>      
        
        // <div class="col-12">
        // <div class="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
        //     <div class="post-thumb">
        //         <img src="img/blog-img/6.jpg" alt="" />
        //     </div>
        //     <div class="post-content">
        //         <div class="post-meta d-flex">
        //             <div class="post-author-date-area d-flex">
        //                 <div class="post-author">
        //                     <a href="#">By Marian</a>
        //                 </div>
        //                 <div class="post-date">
        //                     <a href="#">May 19, 2017</a>
        //                 </div>
        //             </div>
        //             <div class="post-comment-share-area d-flex">
        //                 <div class="post-favourite">
        //                     <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i> 10</a>
        //                 </div>
        //                 <div class="post-comments">
        //                     <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 12</a>
        //                 </div>
        //                 <div class="post-share">
        //                     <a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
        //                 </div>
        //             </div>
        //         </div>
        //         <a href="#">
        //             <h4 class="post-headline">The 10 Best Bars By The Seaside In Blackpool, UK</h4>
        //         </a>
        //         <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        //         <a href="#" class="read-more">Continue Reading..</a>
        //     </div>
        // </div>
        // </div>
    );
}
