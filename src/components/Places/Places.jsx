/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/ladakh.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/goa.jpg";
import Img4 from "../../assets/places/rishikesh.jpg";
import Img5 from "../../assets/places/jaipur.jpeg";
import Img6 from "../../assets/places/darjeeling.webp";
import Popup from "./Popup";

const PlacesData = [
  {
    img: Img1,
    title: "Ladakh",
    location: "India",
    description:
      "Ladakh is known for its stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, murals, and red-robed monks. It is one of the world's cold deserts.It is one of the best tourist places in Kashmir as it is known for its culture that is similar to Tibet.  Ladakh is a land like no other as it has the Siachen Glacier and Great Himalayas. It is often called the adventure playground as people can enjoy climbing, jeep tours, rafting, and high-altitude trekking.",
    type: "#MountainViews  #BuddhistCulture #NatureLovers",
    time: "August-October",
  },
  {
    img: Img2,
    title: "Agra",
    location: "India",
    description:
      "Agra, Uttar Pradesh. Nestled on the banks of Yamuna River, Agra welcomes tourists with its Mughal-era structures, UNESCO World Heritage Sites. The magical lure of the Taj Mahal makes Agra an essential stop on India’s Golden Triangle tourist circuit. But it’s by no means the only attraction — the massive red sandstone Agra Fort and the stirring Akbar’s Mausoleum are both worth a visit, as is Kinari Bazaar for everything from clothes and shoes to spices and marble curios.",
    type: "#CityOfLove #MughalArchitecture #Monuments",
    time: "October to March",
  },
  {
    img: Img3,
    title: "Goa",
    location: "India",
    description:
      "Goa is a state in western India with coastlines stretching along the Arabian Sea, known for its beaches and churches.While Goa is a thriving attraction, where there are clubs and beach parties organized, very few people know that can be the most peaceful and serene place too. There are many offbeat places and beaches that are now crowded with travelers for enjoying the mystical sunset.",
    type: "#BeachLife #SunsetMagic #PartyCapital",
    time: "November to February",
  },
  {
    img: Img4,
    title: "Rishikesh",
    location: "India",
    description:
      "Rishikesh, Uttarakhand. Known as the Yoga Capital of the World, Rishikesh is a serene Himalayan town nestled on the banks of River Ganges.The spiritual beauty of the Ghats beside the holy river Ganga has made Rishikesh a popular destination for every devote. Not only among the Indians, but Rishikesh also draws travelers from almost every corner of the globe with its rejuvenating vibes and yoga bliss.",
    type: "#SpiritualJourney  #GangaAarti #YogaInIndia",
    time: "February to May & September to November",
  },
  {
    img: Img5,
    title: "Jaipur",
    location: "India",
    description:
      "Jaipur is the capital of India's Rajasthan state.Fondly known as the Pink City for its trademark building color and now declared as a UNESCO World Heritage Site.people from around the world come to shop and for its old-world charm. Jaipur has some of the most amazing forts, palaces, temples, and museums like Amer Fort and Jantar Mantar. It is filled with the bustling local markets people can shop at with their heart content.",
    type: "#PinkCity #CityOfPalatialSplendor #CityOfColors",
    time: "October to March",
  },
  {
    img: Img6,
    title: "Darjeeling",
    location: "India",
    description:
      "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. It remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,”. Darjeeling is famous throughout the world for the tea it grows and the great view of the Kanchenjunga range of mountains that it offers. It is also known for its richness in cultural & natural heritage",
    type: "#TeaCapital #SunriseMagic #ColonialCharm",
    time: "May to September",
  },
];

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openPopup = (index) => {
    setSelectedPlace(PlacesData[index]);
  };

  const closePopup = () => {
    setSelectedPlace(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={() => openPopup(index)}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
      <Popup
        isOpen={selectedPlace !== null}
        onClose={closePopup}
        place={selectedPlace}
      />
    </>
  );
};

export default Places;
