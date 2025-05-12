import React from 'react'

const Footer = () => {
  return (
    // <!--section seven starts here-->
    <div>
    <section className="row App-h2 pri">
        <div className="col-md-4">
            <h4 className="text-center App-h2 ">About Us</h4>
            <p>At Inizio Cosmetics, we believe that makeup is more than just a beauty routine – it’s a form of self-expression. Our mission is to empower individuals to embrace their unique beauty by offering high-quality, innovative products that cater to every skin tone and type. </p>


        </div>
        <div className="col-md-4">
            <h4 className="text-center App-h2 ">Contact Us</h4>
            <form>
                <input type="email" id="" name="" placeholder="Enter Your Email" className="form-control"/><br/>
                <textarea name="" id="" className="form-control" placeholder="Leave a comment"></textarea><br/>
                <input type="submit" value="Send Message" name="" id="" className="btn btn-outline-primary"/>
                <br/>

            </form>





        </div>
        <div className="col-md-4">
            <h4 className="text-center App-h2 ">Stay Connected</h4>
           
            <br/>
            <p className="text-dark">Stay up-to-date with the latest beauty trends, product launches, and exclusive offers by connecting with us on social media!</p>




        </div>

    </section>
    <footer className="App-buttan
    ">
        <h5>Developed by Kimberly Njoki. &copy; 2025. All Rights Reserved</h5>
</footer>
</div>
  )
}

export default Footer