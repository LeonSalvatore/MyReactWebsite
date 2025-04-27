const Hero = () => {
    return (

        <section
            id="home"
            className="pt-28 lg:pt-36">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/Images/photo_passport.jpg"
                                width={40}
                                height={40}
                                alt="Leon Salvatore Portrait"
                                className="img-cover"
                            >

                            </img>
                        </figure>
                        <div className="">
                            <span className="hero__content__text__name">
                                <span className="">
                                Available for work
                                <h2 className="">
                                Building Scalable Modern Websites for the Future
                                </h2>
                                <div className="">
                                    ButtonPrimary
                                    ButtonOutline
                                </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                    <figure className="">
                        <img 
                        src="/Images/photo_passport.jpg"
                         width={656}
                         height={800}
                         alt="Leon Salvatore"                        
                         className="w-full"
                         />

                    </figure>

                </div>
            </div>
        </section>
    );

}

export default Hero;