import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="categories-continer" style={{ margin: "0px 20px" }}>
        <h1 style={{ color: "white", paddingLeft: "75px" }}>Categories</h1>
        <h2 style={{ color: "white", paddingLeft: "75px" }}>Genres</h2>

        <div className="language-category">
          <div className="action-adv">
            <Link to={`/Categories/ActionAdventure/all`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Action and Adventure</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/Categories/Comedy/all`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Comedy</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/Documentary/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Documentary</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/Drama/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Drama</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/Fantasy/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Fantasy</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/MysteryAndThriller/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Mystery and Thriller"
              />
              <h3 className="category-name">Mistery and Thriller</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/Romance/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Romance</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/Horror/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Horror</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={"/Categories/SciFi/all"}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/genre_background_4/a77cb87d-f8ac-4ada-88a8-1ca411d7bf13._UR1920,1080_AGaverage_SX480_FMwebp_.png"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Science and Fiction</h3>
            </Link>
          </div>
        </div>
        <h1
          style={{
            color: "white",
            paddingTop: "60px",
            paddingLeft: "75px",
          }}
        >
          Featured Collections
        </h1>

        <div className="language-category">
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Hindi`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Hindi</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/English`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">English</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Telugu`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Telugu</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Tamil`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Tamil</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Kannada`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Kannada</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Marathi`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Marathi</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Punjabi`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Punjabi</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Gujarati`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Gujarati</h3>
            </Link>
          </div>
          <div className="action-adv">
            <Link to={`/WatchInYourLanguage/Bengali`}>
              <img
                className="category-common-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/FeaturedCollections_R1/b02c4f97-4ffb-4fb8-a11d-06d6dc2b6d8a._UR1920,1080_AGaverage_SX480_FMwebp_.jpeg"
                alt="Action and Adventure"
              />
              <h3 className="category-name">Bengali</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
