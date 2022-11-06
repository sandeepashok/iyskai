import styled from "@emotion/styled";

export const PageContainter = styled.div`
  max-width: 900px;
  padding: 24px;
  padding-top: 0;
  margin: auto;
  @media (max-width: 500px) {
    padding: 16px;
  }
`;

export const PageHeading = styled.h2`
  text-align: center;
  margin-bottom: 32px;
`;

export const Para = styled.section`
  margin-bottom: 24px;
`;

export const ParaHeading = styled.h3`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const P = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 150%;
  text-align: justify;
`;

export const Br = styled.div`
  height: 12px;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const Li = styled.li`
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 150%;
  text-align: justify;
`;

export const Image = styled.img`
  width: 320px;
  height: auto;
  border: 5px solid #ffffff;
  max-width: 80vw;
`;

export const ImageAndNameHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 12px;
  color: #020202;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const ThumbImage = styled.img`
  width: 50px;
  height: auto;
`;

export const JapneseNumbers = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Info = styled.div`
  background-color: #181818;
  padding: 24px;
  border-radius: 8px;
`;

const About = () => {
  return (
    <PageContainter>
      <Br />
      <Br />
      <PageHeading>About</PageHeading>
      <Info>
        <ParaHeading>KARATE:</ParaHeading>
        <Para>
          <b>1. What is karate ?</b>
          <Br />
          <P>
            <b>KARA</b>-empty, <b>TE</b>-hand - Hence, karate means literally
            “the state of being empty-handed”
          </P>
        </Para>
        <Para>
          <b>2. What is martial Art?</b>
          <Br />
          <P>
            <b>Martial arts</b> are codified systems and traditions of combat
            practices, which are practiced for a number of reasons: as
            self-defense, military and law enforcement applications, mental and
            spiritual development.
          </P>
          <Br />
          <b>Important facts about Karate</b>
          <Br />
          <ul>
            <Li>
              The place where Karate training is carried out is called the
              "dojo". This translates to "the place of the way".
            </Li>
            <Li>
              The traditional white uniform you wear in the dojo is called a
              "gi", simply meaning "uniform" in Japanese.
            </Li>
            <Li>
              The loud yell made during explosive techniques is called a "kiai"
              (key-i). This is Japanese for "unification of will".
            </Li>
            <Li>
              The kiai serves two purposes, to empty the body of excess wind
              incase you are hit in the stomach by a counter attack and to focus
              all positive energy ("chi") on the technique.
            </Li>
            <Li>
              Karate is one of the most popular martial arts practiced today.
            </Li>
            <Li>
              Karate is for just about everyone, for all ages and is a great
              physical workout, no matter what age or physical condition you are
              in when you start.
            </Li>
            <Li>
              Karate is a way to a better life, not just a method of fighting.
            </Li>
            <Li>
              Karate is great for the mind (concentration) and the spirit
              (emotional stability).
            </Li>
            <Li>
              There is no such thing as the Great martial art. Nor is there any
              art that is better than another or all the rest. The art is not
              better, only the practitioner. But, remember that on any day,
              anywhere, anyone can beat anyone!
            </Li>
          </ul>
        </Para>
        <Para>
          <b>3. Why do you should learn karate?</b>
          <Br />
          <ul>
            <Li>Karate Improves your physical and mental health.</Li>
            <Li>Build self-esteem and strengthen your self-confidence.</Li>
            <Li>Improve your academic performance by raising your level .</Li>
            <Li>
              Learning karate teaches you to mentally and physically refrain
              from violence and only use it for self-defense when it's the last
              resort.
            </Li>
            <Li>
              well its more than just self defence where there are many
              phycological and spiritual benefits also.
            </Li>
          </ul>
          <Br />
        </Para>
        <Para>
          <b>4. What are the levels ?</b>
          <Br />
          <ul>
            <Li>
              Karate uses colored belts to represent their ranking systems. When
              you strive towards a new belt, you're learning valuable lessons
              about setting and reaching goals
            </Li>
            <Li>
              The more skills you learn, and the higher your mastery of the
              martial arts technique, the more confident you will become, and
              the more you will appreciate your self-worth. The more you
              accomplish, the more you'll be comfortable with taking risk and
              stepping out of your comfort zone when faced with the unfamiliar.
            </Li>
            <Li> “Quote”</Li>
            <Li>White, yellow, orange, green, blue, purple, brown, black.</Li>
          </ul>
        </Para>
        <Para>
          <P>
            During the time of Second World War, only darker shades of colors
            were used to signify the move ahead agenda in karate. Dying the
            belts further was a symbol that the person had moved ahead with one
            extra level of expertise. Soon different colors were introduced for
            the level of expertise.
          </P>
          <P>
            <b>White Belt</b> − The birth of a new light is indicated by white.
            In karate it usually depicts for a person who starts to learn karate
            keeping in mind about the different challenges that he is going to
            face.
          </P>
          <P>
            <b>Yellow Belt</b> − It symbolizes the first ray of sun light. In
            karate its meaning is that now the student’s mind is open to accept
            more possible techniques and methods.
          </P>
          <P>
            <b>Orange Belt</b> − This light is an indication of spreading of
            light on the earth. So it shows how the student is expanding its
            knowledge in the field.
          </P>
          <P>
            <b>Green Belt</b> − It depicts the penetration of steams and roots
            of the plant to get the sun light. In turn this means the student is
            developing new skills and learning new techniques to master the
            game.
          </P>
          <P>
            <b>Blue Belt</b> − The plant is growing up towards the sky which is
            blue in color. That means student is going deeper to understand each
            move in karate and differentiating each to gain more knowledge.
          </P>
          <P>
            <b>Purple Belt</b> − It indicates that the student is very serious
            about acquiring new belts that is coming across next.
          </P>
          <P>
            <b>Brown Belt</b> − This shows that the plant is full grown and it
            is ready for the harvesting. Similarly in karate it indicates that
            the student has gained adequate knowledge about the skills and now
            he is ready for the combat.
          </P>
          <P>
            <b>Black belt</b> − Every glowing object has a dark shadow behind it
            and that is what this color is all about. This belt shows that the
            person wearing it has mastered all the skills and he poses a great
            ability within him to enlighten others with his knowledge.
          </P>
        </Para>
        <TextCenter>
          <Image src="/assets/belts.png" alt="Belts-info" />
        </TextCenter>
        <Br />
        <Br />
        <ParaHeading>History of Karate:</ParaHeading>
        <Para>
          <b>Where Karate Began</b>
          <Br />
          <P>
            Karate, the Japanese word for “empty hands,” was born in the
            Okinawan Islands as a form of self-defense, at a time when weapons
            were banned by invading Japanese forces. It began as te (hand), a
            fighting style used by the natives of the Ryukyu Islands, and was
            later influenced by Chinese kenpō, introduced through the Chinese
            families that settled on Okinawa after trade relationships between
            China and the islands were established.
          </P>
          <P>
            From three Okinawan cities (Shuri, Naha, Tomari), each closely
            spaced but with very different societal demands, three separate
            styles emerged:
          </P>
          <i>
            <b>Shuri-te</b>
            <Br />
            <b>Naha-te</b>
            <Br />
            <b>Tomari-te</b>
            <Br />
          </i>
          <P>
            Collectively, these styles were called Okinawa-te or tode (Chinese
            hand), and over time, the styles merged slightly to become just two:
            Shōrin-ryū, developed near Shuri and Tomari, and Shōrei-ryū, near
            Naha.
          </P>
          <P>
            Because of increasing Japanese influence, the label of te was
            eventually lengthened to karate-jutsu (Chinese hand art). It then
            changed to karate-do after an Okinawan master altered the meaning of
            the word kara (also pronounced tode) to mean “empty” rather than
            “Chinese hand.” karate-do translates into “the way of the empty
            hand.”
          </P>
        </Para>
        <Para>
          <b>HISTORY BEHIND THIS ART</b>
          <Br />
          <P>
            Very little is known of the exact origins of karate before it
            appeared in Okinawa, but one popular theory states that it came from
            India over a thousand years ago, brought to China by a Buddhist monk
            called Bodhidarma (“daruma” in Japanese). As legend describes it,
            Bodhidarma arrived in Shaolinsi and began teaching Zen Buddhism as
            well, a style of temple boxing based on exercises designed to
            strengthen the mind and ggbbody. The historical accuracy of this
            legend is still a hot issue of debate today.
          </P>
        </Para>
        <Para>
          <b>Significant Dates in the History of Karate</b>
          <Br />
          <P>
            <b>1905</b>: Karate is included in Okinawa’s physical education
            programs at the intermediate level.
          </P>
          <P>
            <b>1917</b>: Funakoshi gives the first public demonstration of
            karate-do.
          </P>
          <P>
            <b>1922</b>: Funakoshi is invited by Dr. Jano Kano to give a
            demonstration at the Kodokan Dojo, bringing karate-do to Japan.
          </P>
          <P>
            <b>1924</b>: The first university karate club is established in
            Japan, at Keio University.
          </P>
          <P>
            <b>1930s</b>: Karate makes its way to Canada.
          </P>
          <P>
            <b>1936</b>: Okinawan masters meet to discuss karate in Okinawa, a
            meeting sponsored by the newspaper Ryukyu Shimpo.
          </P>
          <P>
            <b>1939</b>: Japan opens Shoto-Kan, its first formal training
            school.
          </P>
          <P>
            <b>1945</b>: The first dojo is opened in the United States.
          </P>
          <P>
            <b>1949</b>: The Japan Karate Association is formed.
          </P>
          <P>
            <b>1950s</b>: Karate is introduced in the United Kingdom.
          </P>
          <P>
            <b>1960s</b>: Karate makes its way to the Soviet Union and is banned
            and unbanned several times over the next three decades.
          </P>
          <P>
            <b>1964</b>: France Shotokan Karate is created in France.
          </P>
          <P>
            <b>1989</b>: Karate is legalized once again in the Soviet Union.
          </P>
        </Para>
        <Para>
          <b>Significant Historical Figures</b>
          <Br />
          <P>
            <b>Gichin Funakoshi:</b> Founder of Shotokan.
          </P>
          <P>
            <b>Dr. Jano Kano:</b> Founder of Japanese judo.
          </P>
          <P>
            <b>Sakukawa Kanga:</b> One of the first Okinawans to study in China.
          </P>
          <P>
            <b>Itosu Anko:</b> Often called the “grandfather of karate,” brought
            karate to Okinawan schools and simplified it for increased public
            acceptance.
          </P>
          <P>
            <b>Chojun Miyagi:</b> Named the Gōjū-ryū style.
          </P>
          <P>
            <b>Hironori Otsuka:</b> Founder of the Wadō-ryū style.
          </P>
          <P>
            <b>Kenwa Mabuni:</b> Founder of the Shitō-ryū style.
          </P>
        </Para>
        <ParaHeading>TRADITIONAL KARATE AND SPORTS KARATE</ParaHeading>
        <Para>
          <P>
            Before selecting a karate school for your child, make sure you know
            and understand which form of karate you’re enrolling him/her into.
            Generally speaking, there are two different types of karate classes,
            traditional karate and sport karate. Both types involve learning
            fighting techniques, but they differ in many other aspects.
            Traditional karate emphasizes self-development (budo), whereas sport
            karate emphasizes exercise and competition. Here are the key
            differences between the two.
          </P>
        </Para>
        <Para>
          <b>History and Origin</b>
          <Br />
          <P>
            <a
              href="https://legendsmma.net/programs/karate/"
              target="_blank"
              rel="noreferrer"
            >
              <b>Traditional karate</b>
            </a>{" "}
            is the original karate. It came into existence as a fighting art in
            Okinawa, Japan. The original karate has its roots in ‘Tode’, a
            weaponless self-defence system. It is influenced by Chinese martial
            arts and has a history that’s over two thousand years old. On the
            other hand, sport karate descended from traditional karate. The
            techniques of this art are based on the stances on punches and kicks
            of the Japanese karate, but were adapted to be more competitive.
          </P>
        </Para>
        <Para>
          <b>Objective and Purpose</b>
          <Br />
          <P>
            The objective behind traditional karate is self-defence and
            survival. It is based on the concept of ‘finishing blow’, meaning
            the last blow of the fight that is sufficient to render the
            attacking opponent unconscious/ unable to fight. In traditional
            karate competitions, the point is awarded to the person that gets
            the finishing blow. The purpose of this fighting technique is to
            develop well-balanced mind and body through training. Sport karate
            is more about competition and scoring points. The points are awarded
            to the fastest and the most precise hit on the target with a foot or
            fist, so there is no need for the finishing blow. The purpose is to
            cultivate the fighting spirit and win the battle.
          </P>
        </Para>
        <Para>
          <b>Set-up and Atmosphere</b>
          <Br />
          <P>
            In traditional karate schools, the training atmosphere has a
            minimalist approach. Hardwood floors and negligible fixtures are
            inspired by the conventional karate teachings found in Japanese
            dojos. Sport karate classes are conducted in a modern set-up where
            mats replace hardwood floors. Matted floors are installed to provide
            a safer environment, especially for children. Big, wall-sized
            mirrors are placed to give a studio-like appearance.
          </P>
        </Para>
        <Para>
          <b>Weight of the Opponent</b>
          <Br />
          <P>
            In a traditional karate competition, the weight and height of the
            opponent don’t matter. The aim is to unite the body’s power into a
            single blow (finishing blow). In a sport karate competition, there’s
            weight categories established. There are 8 different weight
            categories.
          </P>
        </Para>
        <Para>
          <b>Techniques</b>
          <Br />
          <P>
            Traditional karate is a lifetime study and pursuit. In this form of
            karate, one practices techniques repeatedly to perfect them. The
            techniques are crisp, showing power and control over the body. In
            sport karate, the techniques are more fluid and reactive, designed
            for modern-day combat. Sometimes, other techniques are also adapted
            to make the students learn the most effective way of self-defence.
            Both traditional and sport karate are of value but differ on their
            origin, objective, set-up and techniques. To put it simply,
            traditional karate is an art, whereas sport karate is a sports
            event.
          </P>
        </Para>
        <Para>
          <b>The language of Karate</b>
          <Br />
          <P>
            Karate is no longer “Japanese only,” but because of the
            international scope which Karate has taken, it is practical to be
            familiar with the original language of Karate. Language helps to
            communicate and understand the trainings of grand master.
          </P>
          <P>
            All the name of moves in karate are used in karate language,these
            are few numbers spelled in Japanese .one of the first things you
            will hear in the dojo, are the Japanese numbers from 1 to 10:
          </P>
          <JapneseNumbers>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/ich.png" alt="ich" />
              <b style={{ letterSpacing: "initial" }}>Ich</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/ni.png" alt="ni" />
              <b style={{ letterSpacing: "initial" }}>Ni</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/san.png" alt="san" />
              <b style={{ letterSpacing: "initial" }}>San</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/shi.png" alt="shi" />
              <b style={{ letterSpacing: "initial" }}>Shi</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/go.png" alt="go" />
              <b style={{ letterSpacing: "initial" }}>Go</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/roku.png" alt="roku" />
              <b style={{ letterSpacing: "initial" }}>Roku</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/sichi.png" alt="sichi" />
              <b style={{ letterSpacing: "initial" }}>Sichi</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/hachi.png" alt="hachi" />
              <b style={{ letterSpacing: "initial" }}>Hachi</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/ku.png" alt="ku" />
              <b style={{ letterSpacing: "initial" }}>Ku</b>
            </ImageAndNameHolder>
            <ImageAndNameHolder>
              <ThumbImage src="/assets/ju.png" alt="ju" />
              <b style={{ letterSpacing: "initial" }}>Ju</b>
            </ImageAndNameHolder>
          </JapneseNumbers>
          <P>
            Kihon means Basics. Basics are the fundamentals of our art or style.
            In Karate, basics are our punches, our kicks, our blocks, our
            strikes and our stances. In order to build a strong foundation for
            our karate we must drill and practice the basics constantly. The
            honing of our basic technique is the very essence of our training
            and must be taken seriously in order to progress to a high level of
            skill. If we compare karate to learning a language, our kihon or
            karate basics are our vocabulary.
          </P>
        </Para>
        <Para>
          <b>WHAT IS KATA?</b>
          <Br />
          <P>
            The Japanese word, kata, can be roughly translated as form, a kind
            of shadow boxing which applies karate techniques in a series of
            memorized patterns. But to those who really understand kata training
            know that there is much more to it than that.
          </P>
          <P>
            Kata was originally developed for several reasons. From the
            beginning, martial arts masters realized that their students cannot
            use full-force when sparring or they would severely injure, or even
            kill, their partners. By developing katas, the masters could help
            their students learn to apply fighting techniques with full force,
            because their opponents were imaginary. Also, the students could
            simulate fighting multiple opponents in dangerous situations,
            without fear of being injured.
          </P>
          <P>
            Individuals responsible for the development of kata also had the
            opportunity to include a wide range of techniques during the
            creative process. Although karate masters focused primarily on
            karate techniques, they also included movements from other martial
            arts, as well as from everyday activities. The hunters as they
            pursued many different kinds of animals were particularly inspiring.
            Observations of the animals themselves were also very important, as
            the masters watched how the animals moved and fought, and then found
            ways of including characteristics of those movements within kata.
          </P>
          <P>
            Each major style of karate has innumerable katas which are designed
            to reflect the basic elements of that style. Within each style there
            are also groupings of related katas that share a similar structure
            and focus on a specific set of skills. Within these groupings, and
            within the style as a whole, there is usually a well- defined
            progression from one kata or group of katas to the next. Students
            are taught katas in an order that helps them build upon and enhance
            their basic skill.
          </P>
          <P>
            When individuals first become karate students, they are introduced
            to a whole set of new skills. New students are taught basic
            techniques, but they need a training structure to learn how to use
            them effectively. Katas are an important part of helping these
            students develop their first awareness of how the techniques they
            are learning can be used in a fight. Later, as students rise through
            their school ranks, the katas can become more elaborate to meet the
            growing need to challenge the students to improve their skills.
          </P>
          <P>
            By the time students have achieved their black belts, they have a
            deep awareness of the importance of kata to the development of their
            skills. However, it must always be remembered even at the black belt
            level, that students must always continue to strive to excel with
            evermore challenging katas.
          </P>
          <P>
            Another important way that katas enhance training is that students
            may learn the katas of other styles. For instance, Wado-Ryu karate
            students normally emphasize moving in straight lines, creating power
            by with rapidly executed techniques, while Goju-ryu karate spends
            more of their time on curving movements, generating power y building
            tension. Practicing katas from a style that uses a different
            approach can offer students an opportunity to understand different
            and complementary techniques, and to incorporate those techniques
            into their training.
          </P>
          <P>
            In addition, a single kata may have several different versions. In
            other words, a particular karate kata may be performed in a
            different manner by students of different styles of karate. Many
            karate katas have counterparts in more than one style. Furthermore,
            individual schools within a single karate style may incorporate
            small variations in how they teach and practice the same kata.
            Often, these differences serve to identify the teachings and
            students of specific Instructors. Students wishing to expand their
            knowledge as much as possible may seek to become familiar with these
            different versions of kata.
          </P>
        </Para>
        <Para>
          <b>THE SIGNIFICANCE OF KATA</b>
          <Br />
          <P>
            In karate training is revealed in its most fundamental elements. One
            of these elements is that kata training has no special requirements.
            Students need no equipment and can practice in any season, at any
            time, and in virtually any location. If necessary, the required
            space can be as small as two paces wide, because advanced kata
            students are able to a just how they step in order to complete the
            movements.
          </P>
          <P>
            Kata can be practiced in the mind – a method which is, in its own
            right, a very important and effective way of training. At its most
            basic, kata is excellent exercise that can benefit men, women, and
            children, of all ages and levels of ability. At its most advanced,
            kata is a superb means for students to continually sharpen their
            skills by allowing them to train under any circumstances. Finally,
            kata training strengthens the mind as well as the body, because
            students must focus their minds to remember the katas, lest they be
            forgotten.
          </P>
          <P>
            The ongoing challenge of kata training is to strive to achieve
            perfection. Of course, no person ever truly attains perfection. The
            greatest masters will humbly say that they, like the students, are
            always working toward that goal. Students must continually hone
            their skills, even as they’re learning new ones and must remain open
            to the observations of their instructors and fellow students. Most
            students realize that no matter how many times they do a kata, they
            can always benefit form listening to others who may detect a bad
            habit.
          </P>
          <P>
            Advanced students need to practice the katas, they learned as
            beginners. Too often, advanced students neglect the beginning –
            level Katas, and focus only on the more glamorous and impressive
            katas. Retaining awareness of their beginnings can be of great value
            to advanced students, as new students look to them for guidance and
            inspiration. Because each person’s body is different, individual
            students will often find that some katas are easier and others
            harder for them to perform. Even though all katas need to be
            retained, students will usually benefit form focusing on those katas
            that are most compatible with their own abilities and physical
            characteristics. Emphasizing specific katas can help students
            develop their own particular expertise as fully as possible and
            allow them to contribute something unique for the benefit their
            follow students.
          </P>
          <P>
            Developing an expertise is also helpful in preparing for kata
            competitions. Such competitions are significant elements of training
            that can help students learn how to deal with the stresses
            associated with performing in front of others. Today, many karate
            students are interested in sport karate, which includes kata
            competitions emphasizing creativity, costumes, and music. In
            addition there are many traditional tournaments, where judges adhere
            to much stricter guidelines. Competitions are also an effective
            method students can use to prepare for testing. Kata is a critical
            part of the testing process to review the growing skills and
            knowledge of students seeking higher rank.
          </P>
          <P>
            Martial arts are designed to help students acquire skills useful in
            self- defence. The single most fundamental idea of karate is that a
            single blow should finish the opponent. Kata training, along with
            training in basics and sparring, helps students move ever closer to
            this objective. However, an extremely important point is that the
            ultimate purpose of training is to offer a means of developing a
            healthy body and a strong character. Kata, with its richness and
            diversity, is a powerful tool that can help students in their
            ongoing efforts to reach their goals.
          </P>
        </Para>
        <Para>
          <b>Kumite</b>
          <Br />

          <P>
            Kumite is one of the three elements of karate (karate training
            includes kihon - technique improvement, kata fight with imaginary
            opponents, and kumite fight with a real opponent. This is a fight in
            which basic techniques executed with "empty hands" (an unarmed hand)
            acquire a real meaning in confronta-tion with a real opponent.
            Correctness and thoroughness of techniques" execution are the basis
            of kumite. It is not easy to become aware of it, especially for the
            beginners. Only after some time students come to realize that kumite
            is the kind of the fight with the opponent, which aims at own
            expression and self-improvement. So it is necessary to make the
            maximum physical and mental effort which would allow to keep
            constant concentration and to execute each technique with
            appropriate efficiency and strength. This is to block the opponent"s
            effective reaction.
          </P>
          <P>
            Depending on the level of advancement, contests are led in various
            ways. We distinguish three categories: basic (fixed distance and
            announced techniques kihon ippon kumite), semi-free (free distance,
            at the first, announced attack technique executed in the fixed time
            - juyu ippon kumite) and free (the competitors can use any technique
            without a warning. However, they must be in full control of their
            blows so as not to hurt an opponent - jiyu kumite).
          </P>
          <P>
            Since the ultimate aim of karate is control of oneself and of one's
            emotions, it becomes clear why in free category, kumite is the last
            stage of training in this form of karate.
          </P>
          <P>
            Unfortunately, despite many efforts of instructors trying to inform
            the general public that karate competition is neither an ordinary
            brawl nor the means of pressure and violence, still there are many
            deeply rooted negative opinions of karate. Till the present day,
            there have been people for whom karate means only "bashing" or
            "breaking boards". Certainly, sometimes karate looks like this. From
            its very nature it resembles a knife which may serve good or bad
            purposes, depending on the intention with which it was used.
          </P>
          <P>
            Fight with someone who is first of all your friend from dojo and
            only later your opponent is a challenge. This is solely to serve as
            a means of increasing the spirit of fight. An individual must avoid
            the confrontation which would only serve to demonstrate his
            superiority. Strength and efficiency become worthless if they do not
            serve a higher aim. Individuals begin training in a traditional
            martial art for many different reasons; physical conditioning,
            stress relief, practical self defense, and, learning time-honored,
            effective, and winning fighting skills.
          </P>
          <P>
            Until Master Ohtsuka's intervention in the early 1940's, sparring
            sessions in traditional dojos in Japan were usually followed by
            sessions at the doctor afterwards. Injuries were as expected as
            exhaustion, until he introduced the practice of Kumite; pre-arranged
            sparring drills wearing modified kendo pads for protection. Since
            that modification, Kumite and the development of controlled fighting
            skills has become as much a part of traditional karate dojos as
            wearing your gi and obi.
          </P>
          <P>
            The object of Karate is to defeat your opponent by utilising
            punches, kicks and throws to score points. At the end of a Karate
            kumite, the competitor with the most points is declared the winner
            (or before the end if they reach and eight point lead over their
            opponent). As well as being a combative physical activity, Karate is
            highly skilled and tactical, and all competitors are required to
            have a high level of skill, experience, speed and dexterity to be
            successful in Karate competition.
          </P>
        </Para>
      </Info>
    </PageContainter>
  );
};

export default About;
