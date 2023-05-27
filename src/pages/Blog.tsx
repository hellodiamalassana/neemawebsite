import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className=" text-slate-600 text-center  text-[25px]">

                <p className="">
                    Vous trouverez sur notre <b>Blog</b> nos meilleurs conseils ainsi que <br />
                    des outils gratuits qui vous aideront à gérer votre entreprise plus simplement et efficacement.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
