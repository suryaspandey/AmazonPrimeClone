import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

function Categories() {
    return (
        <>
            <div className="categories-continer">
                <h1
                    style={{
                        color: "white",
                        paddingTop: "60px",
                        paddingLeft: "75px",
                    }}
                >
                    Categories
                </h1>

                {/* <div className="genres-category">
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>{" "}
                                Action and Adventure
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>{" "}
                                Action and Adventure
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                                <div className="action-adv">
                                    <Link>
                                        <img
                                            className="category-common-img"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                            alt="Action and Adventure"
                                        />
                                        <h3 className="category-name">
                                            Action and Adventure
                                        </h3>
                                    </Link>
                                </div>
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                </div> */}
                <div className="language-category">
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                </div>

                <h1 style={{ color: "white", paddingLeft: "75px" }}>Genres</h1>

                <div className="language-category">
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                    <div className="action-adv">
                        <Link>
                            <img
                                className="category-common-img"
                                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                                alt="Action and Adventure"
                            />
                            <h3 className="category-name">
                                Action and Adventure
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
