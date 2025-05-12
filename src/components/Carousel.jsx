import React from 'react'

const Carousel = () => {
    return (
        // <!--section two starts here-->
        <section className="row">
            <div className="col-md-12">
                {/* <!--below div will carry the three parts of carousel--> */}
                <div className="carousel slide"data-bs-ride="carousel"id="mycarousel">
                    {/* // <!--wrapper starts here--> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/lip.jpg" alt="" className="d-block w-100 img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/flower.jpg" alt="" className="d-block w-100 img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/water.jpg" alt="" className="d-block w-100 img"/>
                        </div>
                    </div>
                    {/* <!--wrapper ends here--> */}
                    {/* <!-- controllers start here --> */}
                     <a href="#mycarousel" data-bs-slide="prev"className="carousel-control-prev"><span className="carousel-control-prev-icon bg-danger"></span></a>
                     <a href="#mycarousel"data-bs-slide="next" className="carousel-control-next"><span className="carousel-control-next-icon bg-danger"></span></a>
                </div>
            </div>
        </section> 
  
    )
}

export default Carousel