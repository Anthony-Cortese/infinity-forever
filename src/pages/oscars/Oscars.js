import React from "react";
import "./styles.css";
import oscar from "./pictures/oscars.png";
import oscar1 from "./pictures/1.png";
import oscar2 from "./pictures/director.png";
import oscar6 from "./pictures/2.png";
import oscar3 from "./pictures/3.png";
import oscar4 from "./pictures/4.png";
import oscar5 from "./pictures/5.png";
import oscar11 from "./pictures/11.png";
import oscar12 from "./pictures/12.png";
import oscar13 from "./pictures/13.png";
import oscar14 from "./pictures/14.png";
import oscar15 from "./pictures/15.png";
import oscar16 from "./pictures/16.png";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// import video from "./pictures/taylor.mp4";
// import Video from "../../assets/Video";

function Oscars() {
  return (
    <>
      <section id="infinity-oscar">
        <div className="oscars-banner">
          <img className="oscars-img" src={oscar} alt="oscar" />
        </div>
        <div className="oscar-div">
          <div className="oscar-info">
            <h1 className="article">
              An interview with the brothers of Infinity Forever---
            </h1>
            <p className="oscar-words">
              <strong>Provo, UT--- </strong>
              The Cortese brothers, the brains behind Infinity Forever had
              watched their cousins Parker and Scott Paulsen year after year
              attend the SLC Oscars and had always hoped one day they would be
              able to create a film and join in on “the funnest night of the
              year”. The SLC Oscars behind the scenes has a giant production,
              with the creators working tirelessly for weeks leading up to this
              one extremely special night.
            </p>
            {/* <img className="oscar-img1" alt="oscar" src={oscar2}></img> */}
            <p className="oscar-words">
              Anthony after making his first and only film Underneath The Bottom
              more than a decade ago wanted to create a special scene and prove
              that his talents belonged in the competition. “My first film was
              very amateurish— watching it back I see so many issues with my
              creation of it.” He went on to say “The performances from Jen, and
              Sean were outstanding, the problems the film faced were completely
              my doing.”
            </p>
            <p className="oscar-words">
              The whole idea of recreating the scene from The Wolf of Wall
              Street and portraying Leonardo DiCaprio was to “enter the
              competition with a bang— and make a name for ourselves” said
              Anthony “I came up with the idea for this scene and I knew we had
              to do it”. While the film was an absolute hit with the crowd it
              was the performance from Sean Cortese that completely stole the
              show and won over the crowd. Scott Paulson a founding member of
              the SLC Academy stated it was “the most underrated performance of
              2021”.
            </p>

            <p className="oscar-words">
              The brothers wanted to make sure that the female role had just as
              much fire and gusto as the male role. The scene is very much a
              back and forth battle between the two characters and Sean wanted
              Sabi for this role from the very beginning— “there is not a clear
              winner or a loser in this scene, while you could make a case for
              either character I am the one who eventually gets several cups of
              water thrown on me.”{" "}
            </p>
          </div>

          <div className="oscar-info1">
            <p className="oscar-words">
              The biggest concern with this scene was the mature dialogue and
              content— “we had to check with Parker several times to make sure
              this amount of language, especially the use of the f-word would be
              ok with the crowd” to which Parker said “Yes”. It was at the 2022
              show where the brothers found out there was a first time attendee
              in the crowd who was not a fan of language or other adult content.
              The first film there was a scene in which 2 men kissed and that
              caused her to squirm in her chair— only for her to realize 3 films
              later there would be a major abundance of the f-word that would
              send her out the door.{" "}
            </p>
            <p className="oscar-words">
              The Oscar party in 2022 there was already some hype around what
              the brothers were going to do. “There is so much pressure coming
              out of the gates with a movie of this nature— that you feel you
              have to continually one up yourself or you will lose the crowd and
              the momentum” Anthony said. This brings us to our next film which
              was an adaptation of the Quentin Tarantino film “Once Upon A Time
              in… Hollywood”. This was no easy task to take on. “We realized
              that it was just going to be the two of us so we had to find a
              scene that would ultimately fit with one of us on the camera, and
              the other acting, or just using a tri-pod which was very
              challenging” said Sean “and once again Tony came up with a genius
              idea that we set into motion.”
            </p>
            <p className="oscar-words">
              <strong>Anthony:</strong> “There were 2 main keys to make this
              film work— we had to tell a story on the TV for the 2 characters
              to critique, and we HAD to have the old TV displaying this story
              we created.” said Anthony.{" "}
            </p>
            <p className="oscar-words">
              <strong>Sean:</strong> “yes but also we needed Provo stereotypes
              that hopefully everyone would be able to pick up on— we had a list
              of 10-12 different scenes that could fit into the documentary, we
              shot around 8 or 9 scenes but our overall film was to long so we
              had to cut them.”{" "}
            </p>
            <p className="oscar-words">
              <strong>Anthony:</strong> “Technically a Directors Cut does exist—
              maybe one day we will release it.”{" "}
            </p>
            <p className="oscar-words">
              The days right after the Oscar Party had the brothers already
              brainstorming and getting excited about their next entry— or as
              Anthony hopes “multiple entries”. Both the brothers are extremely
              excited for 2023 and want to “make something that hasn’t been done
              yet.”
            </p>
          </div>
        </div>
      </section>
      <section id="oscars-top">
        <div className="oscar-oscar">
          <p>
            For more information please check out the Oscar Party SLC Instagram
            or Youtube page to check out all the entries from the previous years
            and to stay caught up on the very best Oscars party in SLC. It's
            better to be King or Queen for a night than a schmuck for a
            lifetime!
          </p>
        </div>
        <div className="oscar-icons">
          <a href="https://www.youtube.com/user/scottkpaulsen/featured">
            <BsYoutube className="oscars-icon" />
          </a>
          <a href="https://www.instagram.com/oscarpartyslc/">
            <AiFillInstagram className="oscars-icon1" />
          </a>
        </div>
        {/* <div className="new-movie">
          <div className="overlay"></div>
          <Video className="video-component" />
        </div> */}
        <section id="oscar-photos">
          <div className="oscar-pics">
            <img className="oscar-img" alt="oscar" src={oscar11}></img>
            <img className="oscar-img" alt="oscar" src={oscar16}></img>
            <img className="oscar-img" alt="oscar" src={oscar12}></img>
            <img className="oscar-img" alt="oscar" src={oscar13}></img>
            <img className="oscar-img" alt="oscar" src={oscar14}></img>
            <img className="oscar-img" alt="oscar" src={oscar15}></img>
            <img className="oscar-img" alt="oscar" src={oscar1}></img>
            <img className="oscar-img" alt="oscar" src={oscar6}></img>
            <img className="oscar-img" alt="oscar" src={oscar2}></img>
            <img className="oscar-img" alt="oscar" src={oscar3}></img>
            <img className="oscar-img" alt="oscar" src={oscar4}></img>
            <img className="oscar-img" alt="oscar" src={oscar5}></img>
          </div>
        </section>
      </section>
    </>
  );
}

export default Oscars;
