import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className={"border-t border-gray-300 z-0 flex flex-col items-center"}>
                <div className={"grid grid-cols-5 gap-x-4 font-sans w-full px-12 py-10"}>
                    <div className={"flex flex-col"}>
                        <h4 className={"text-lg font-semibold my-3"}>Categories</h4>
                        <span className={"footer-text"}>
                          <Link href={"/categories/graphics_design"}>
                              <a>
                                      Graphics & Design
                              </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/categories/digital_marketing"}>
                                            <a>
                                                Digital Marketing
                                            </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/categories/writing_translation"}>
                             <a>
                                  Writing & Translation
                             </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/categories/video_animation"}>
                               <a>
                                   Video & Animation
                               </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                         <Link href={"/categories/music_audio"}>
                             <a>
                                  Music & Audio
                             </a>
                         </Link>
                      </span>
                        <span className={"footer-text"}>
                           <Link href={"/categories/programming_tech"}>
                               <a>
                                     Programming & Tech
                               </a>
                           </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/categories/business"}>
                              <a>
                                  Business
                              </a>
                          </Link>

                      </span>
                        <span className={"footer-text"}>
                           <Link href={"/categories/fun_lifestyle"}>
                                 <a>
                                      Fun & Lifestyle
                                 </a>
                           </Link>
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                        <h4 className={"text-lg font-semibold my-3"}>About</h4>
                        <span className={"footer-text"}>
                          <Link href={"/customer_support"}>
                               <a>
                                   Customer Support
                               </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/how_it_works"}>
                                            <a>
                                                 How It Works
                                            </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/knowledge_bank"}>
                               <a>
                                   Knowledge Bank
                               </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/freelancers"}>
                                <a>
                                    Freelancers
                                </a>
                          </Link>
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                        <h4 className={"text-lg font-semibold my-3"}>Pages</h4>
                        <span className={"footer-text"}>
                          <Link href={"/privacy_policy"}>
                              <a>
                                   Our privacy policy
                              </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/terms_of_service"}>
                                         <a>
                                             Terms of service
                                         </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/selling_on_letworkbedone"}>
                              <a>
                                    Selling on Letworkbedone
                              </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/buying_on_letworkbedone"}>
                                <a>
                                    Buying on Letworkbedone
                                </a>
                          </Link>
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                        <h4 className={"text-lg font-semibold my-3"}>Community</h4>
                        <span className={"footer-text"}>
                          <Link href={"/affiliates"}>
                               <a>
                                   Affiliates
                               </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/invite_friend"}>
                                            <a>
                                                Invite a Friend
                                            </a>
                          </Link>
                      </span>
                        <span className={"footer-text"}>
                          <Link href={"/become_seller"}>
                              <a>
                                  Become a Seller
                              </a>
                          </Link>
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                        <h4 className={"text-lg font-semibold my-3"}>Secure Payments with</h4>
                        <div>
                            <Link href={"https://www.paypal.com/us/business"}>
                                <a className={""}>
                                    <Image src={'/images/paypal.png'} width={"100%"} objectPosition={"inherit"}
                                           height={28} quality={100}/>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://www.payoneer.com/"}>
                                <a>
                                    <Image src={'/images/payoneer.png'} width={"100%"} height={35} quality={100}/>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/categories/graphics_design"}>
                                <a>
                                    <Image src={'/images/visa.png'} width={"100%"} height={28} quality={100}/>
                                </a>
                            </Link>
                        </div>
                        <div className={""}>

                            <div className={"bg-yellow-900 flex w-max my-1 items-center"}>
                                <Link href={"/categories/graphics_design"}>
                                    <a>
                                        <Image src={'/images/mastercard.png'} width={"100%"} height={25} quality={100}/>
                                    </a>
                                </Link>
                            </div>

                        </div>
                        <div className={""}>
                            <Link href={"/categories/graphics_design"}>
                                <a>
                                    <Image src={'/images/discover.png'} width={"100%"} height={28} quality={100}/>
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={"border-t border-gray-300 w-full h-36 flex flex-col  items-center justify-center"}>
                    <div className={"flex justify-center my-3"}>
                        <span className={"mx-2"}>
                        <Link href={"https://www.facebook.com/Letworkbedone-105566091338847"} >
                          <a target={"_blank"}>
                        <img src={"/images/facebook.png"} alt={"facebook"} className={"h-8"}/>
                          </a>
                        </Link>
                    </span>
                        <span className={"mx-2"}>
                        <Link href={"https://www.linkedin.com/in/katimbo-atwabi-44777a201/"}>
                          <a target={"_blank"}>
                        <img src={"/images/linkedin.png"} alt={"facebook"} className={"h-8"}/>
                          </a>
                        </Link>
                    </span>
                        <span className={"mx-2"}>
                        <Link href={"https://www.pinterest.com/letworkbedone/_saved/"}>
                          <a target={"_blank"}>
                        <img src={"/images/pinterest.png"} alt={"facebook"} className={"h-8"}/>
                          </a>
                        </Link>
                    </span>

                    </div>
                    <span>
                         copyright &copy;letworkbedone {new Date().getFullYear()}
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;