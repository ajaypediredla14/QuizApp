import logo from './logo.svg'
import './App.css'
import header from './assets/header.png'
import Pic from './assets/pic1.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import particlesConfig from './particlesConfig'
import particlesConfig1 from './particlesConfig_copy'

function App() {
  const [Questions, setQuestions] = useState({
    0: [
      {
        question:
          '1. Which book series features a young wizard and his friends battling dark forces?',
        options: [
          { id: 1, value: 'The Lord of the Rings' },
          { id: 2, value: 'Harry Potter' },
          { id: 3, value: 'Percy Jackson & the Olympians' },
          { id: 4, value: 'The Chronicles of Narnia' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
        status: '',
      },
      {
        question:
          '2. What dystopian novel depicts a society controlled by a totalitarian regime through mind control?',
        options: [
          { id: 1, value: ' Nineteen Eighty-Four' },
          { id: 2, value: 'Brave New World' },
          { id: 3, value: 'The Handmaids Tales' },
          { id: 4, value: 'Fahrenheit 451' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '3.Which classic detective story follows a brilliant but eccentric investigator solving a puzzling murder?',
        options: [
          { id: 1, value: 'Sherlock Holmes' },
          { id: 2, value: 'The Maltese Falcon' },
          { id: 3, value: 'Miss Marple' },
          { id: 4, value: 'The Murder of Roger Ackroyd' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '4. What viral meme, originating from a recent Bollywood dance number, took social media by storm with its catchy tune and goofy expressions?',
        options: [
          { id: 1, value: 'Koffee with Karans rapid fire round' },
          { id: 2, value: 'Shamsheras water bucket scene' },
          { id: 3, value: '"Jiggle Jiggle" (still going strong?)' },
          { id: 4, value: '"Chaska Meter" (from Bhool Bhulaiyaa 2)' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '5. Which web series, exploring forbidden desires and dark secrets, became a controversial hit on a new streaming platform in 2023?',
        options: [
          { id: 1, value: 'Panchayat' },
          { id: 2, value: 'Mirzapur' },
          { id: 3, value: 'Bandish Bandits' },
          { id: 4, value: ' A Suitable Boy' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '6. Which reality show sent celebrities on a luxurious adventure across the globe in 2023?',
        options: [
          { id: 1, value: 'Khatron Ke Khiladi' },
          { id: 2, value: 'The Amazing Race India' },
          { id: 3, value: 'Jhalak Dikhhla Jaa' },
          { id: 4, value: 'Bigg Boss' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '7. What popular dance reality show is judged by the sassy trio - Malaika Arora, Terence Lewis, and Nora Fatehi?',
        options: [
          { id: 1, value: 'Indias Best Dancer' },
          { id: 2, value: 'Dance Deewane' },
          { id: 3, value: 'Super Dancer' },
          { id: 4, value: 'Jhalak Dikhhla Jaa' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '8. What complex philosophical theory became a surprise meme due to its association with a specific animated character?   ',
        options: [
          { id: 1, value: 'Nihilism (Rick and Morty)' },
          { id: 2, value: 'Existentialism (Bojack Horseman)' },
          { id: 3, value: ' Stoicism (The Good Place)' },
          { id: 4, value: 'Utilitarianism (Black Mirror)' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '9. What social media platform is most frequently associated with surreal, often nonsensical memes?          ',
        options: [
          { id: 1, value: 'Facebook' },
          { id: 2, value: 'Reddit' },
          { id: 3, value: 'Instagram' },
          { id: 4, value: 'Twitter' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
        status: '',
      },
      {
        question:
          '10. Which celebritys name became synonymous with falling down in 2023, inspiring countless jokes and memes?',
        options: [
          { id: 1, value: 'Leonardo DiCaprio' },
          { id: 2, value: 'Jennifer Lawrence' },
          { id: 3, value: 'Kanye West' },
          { id: 4, value: 'Chris Pratt' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '11. Which artist holds the record for most Billboard Hot 100 #1 hits (solo female)?',
        options: [
          { id: 1, value: 'Mariah Carey' },
          { id: 2, value: 'Rihanna' },
          { id: 3, value: 'Madonna' },
          { id: 4, value: 'Beyoncé' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, true, false],
        status: '',
      },
    ],
    1: [
      {
        question:
          '1. Which meme features a woman yelling at her guy, often used to illustrate contrasting priorities?',
        options: [
          { id: 1, value: 'Woman Yelling at Cat' },
          { id: 2, value: 'Drakeposting' },
          { id: 3, value: 'Distracted Boyfriend' },
          { id: 4, value: 'Success Kid' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, true, false],
        status: '',
      },
      {
        question:
          '2. Which unexpected duo captured headlines with a surprise collaboration announcement?        ',
        options: [
          { id: 1, value: ' Taylor Swift & Kanye West' },
          { id: 2, value: 'Rihanna & Adele' },
          { id: 3, value: 'Beyoncé & Drake' },
          { id: 4, value: 'BTS & Coldplay' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '3. Which viral song, initially known for its sped-up audio, exploded on TikTok and radio charts? ',
        options: [
          { id: 1, value: '"As It Was" by Harry Styles' },
          { id: 2, value: '"About Damn Time" by Lizzo' },
          { id: 3, value: '"Heat Waves" by Glass Animals' },
          { id: 4, value: '"Jiggle Jiggle" by Duke & Jones & Louis York' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '4. Which live-action remake became a cinematic sensation and sparked a pink trend? ',
        options: [
          { id: 1, value: 'The Little Mermaid' },
          { id: 2, value: 'Barbie' },
          { id: 3, value: 'Snow White and the Seven Dwarfs' },
          { id: 4, value: 'Hercules' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
        status: '',
      },
      {
        question:
          '5. The "Hey Look Ma, I Made It" trend involves showing off accomplishments. Which celebrity is most associated with popularizing this trend?   ',
        options: [
          { id: 1, value: 'Dwayne "The Rock" Johnson' },
          { id: 2, value: 'Kylie Jenner' },
          { id: 3, value: 'Cardi B' },
          { id: 4, value: 'Ryan Reynolds' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '6. Which fantasy epic features a hobbit on a quest to destroy a powerful ring? ',
        options: [
          { id: 1, value: 'The Lord of the Rings: The Fellowship of the Ring' },
          { id: 2, value: 'The Hobbit: An Unexpected Journey' },
          { id: 3, value: 'Harry Potter and the Sorcerers Stone' },
          {
            id: 4,
            value:
              'The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe',
          },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '7. Which drama revolves around a dysfunctional royal family in England?          ',
        options: [
          { id: 1, value: 'The Crown' },
          { id: 2, value: 'Downton Abbey' },
          { id: 3, value: 'Bridgerton' },
          { id: 4, value: 'Peaky Blinders' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, true, false],
        status: '',
      },
      {
        question:
          '8. This show follows a high school chemistry teacher turned drug kingpin          ',
        options: [
          { id: 1, value: ' Breaking Bad' },
          { id: 2, value: 'Dexter' },
          { id: 3, value: 'Ozrak' },
          { id: 4, value: 'Narcos' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
      {
        question:
          '9. Which iconic pop music producer is credited with launching the careers of Britney Spears and Justin Timberlake?',
        options: [
          { id: 1, value: ' Max Martin' },
          { id: 2, value: 'Timbaland' },
          { id: 3, value: 'Rick Rubin' },
          { id: 4, value: 'Dr. Luke' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, false, false, true],
        status: '',
      },
      {
        question:
          '10. Which song won the Grammy Award for Song of the Year in 2023?',
        options: [
          { id: 1, value: '"About Damn Time" by Lizzo' },
          { id: 2, value: 'As It Was" by Harry Styles' },
          { id: 3, value: '"Leave the Door Open" by Silk Sonic' },
          { id: 4, value: ' "We Dont Talk About Bruno" from Encanto' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
        status: '',
      },
      {
        question: '11. Who is the lead singer of the band Coldplay?',
        options: [
          { id: 1, value: ' Chris Martin' },
          { id: 2, value: 'Bono' },
          { id: 3, value: 'Thom Yorke' },
          { id: 4, value: ' Edd Sheeran' },
        ],
        answer: [false, false, false, false],
        correct_answer: [true, false, false, false],
        status: '',
      },
    ],
  })

  const [currentPage, setCurrentPage] = useState(0)
  const [showHints, setShowHints] = useState(false)
  const [canMove, setCanMove] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [home, setHome] = useState(true)

  const [answers, setAnswers] = useState({
    0: [
      'Harry Potter',
      'Nineteen Eighty-Four',
      'Sherlock Holmes',
      '"Chaska Meter" (from Bhool Bhulaiyaa 2)',
      'A Suitable Boy',
      'Khatron Ke Khiladi',
      'Jhalak Dikhhla Jaa',
      'Nihilism (Rick and Morty)',
      'Reddit',
      'Leonardo DiCaprio',
      'Madonna',
    ],
    1: [
      'Distracted Boyfriend',
      'BTS & Coldplay',
      '"Jiggle Jiggle" by Duke & Jones & Louis York',
      'Barbie',
      'Dwayne "The Rock" Johnson',
      'The Lord of the Rings: The Fellowship of the Ring',
      'Bridgerton',
      ' Breaking Bad',
      'Dr. Luke',
      'As It Was" by Harry Styles',
      ' Chris Martin',
    ],
  })
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    })
  }

  const scrollToBottom = async () => {
    await setShowHints((prev) => !prev)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: 'smooth' // Optional: Add smooth scrolling behavior
    });
  };

  const onChangeAnswer = (e) => {
    const [currentPage_index, Question_index, option_index] =
      e.target.name.split('_')
    const question = { ...Questions }
    const tempvalues = new Array(4).fill(false)
    tempvalues[option_index] = true
    question[currentPage_index][Question_index].answer = tempvalues
    // // console.log("checking", question)
    setQuestions(question)
  }

  function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }

    return true
  }

  const onValidate = () => {
    if (canMove) {
      if (currentPage === Object.keys(Questions).length - 1) {
        setSubmit(true)
      } else {
        setCurrentPage((prev) => prev + 1)
        setShowHints(false)
        setCanMove(false)
      }
    } else {
      const question = { ...Questions }
      let flag = false
      for (let i = 0; i < question[currentPage].length; i++) {
        console.log('checkin', question[currentPage][i])
        if (
          arraysAreEqual(
            question[currentPage][i].answer,
            question[currentPage][i].correct_answer
          )
        ) {
          question[currentPage][i].status = '1'
        } else {
          flag = true
          question[currentPage][i].status = '0'
        }
      }

      setQuestions(question)
      if (!flag) {
        setCanMove(true)
      }
    }
  }

  function shuffleArray(array) {
    const shuffledArray = [...array] // Create a new array to avoid modifying the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ]
    }
    return shuffledArray
  }

  return (
    <div className=' relative'>
      {submit ? (
        <div className='flex flex-col relative bg-white gap-5 h-[90vh] items-center justify-center'>
          <Particles
            className='absolute'
            id='tsparticles'
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
            style={{ zIndex: 1 }} // Set a lower zIndex for particles
          />
          <div className='flex  flex-col z-10 items-center justify-center gap-5'>
            {' '}
            {/* Set a higher zIndex for content */}
            <div>
              <button
                className={`text-[#001437] text-[80px] border   bg-[#BCFB46] hover:bg-transparent  hover:text-[#a0db32]  font-bold md:px-6  px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer`}
              >
                Thanks for submitting the Quiz!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {home ? (
            <div className='flex flex-col relative App gap-5 h-screen items-center justify-center'>
              <Particles
                className='absolute'
                id='tsparticles'
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
                style={{ zIndex: 1 }} // Set a lower zIndex for particles
              />
              <div className='flex  flex-col z-10 items-center justify-center gap-5 md:p-5 p-3'>
                {' '}
                {/* Set a higher zIndex for content */}
                <h1 className=' text-black w-[100%] md:text-2xl text-md  rounded-lg font-["nunito"] '>
                  Attention, pop culture aficionados! Hold onto your fandom hats
                  and trivia trophies, folks, because we're diving deep into the
                  captivating world of engagement! In the vibrant playground of
                  pop culture, where attention spans are shorter than TikTok
                  dances and trends shift faster than a superhero's cape, one
                  tool reigns supreme:
                </h1>
                <h1 className=' text-black w-[100%] md:text-2xl text-md  rounded-lg font-["nunito"]'>
                  The Quiz. So, Buckle up, because we're about to dive into the
                  irresistible context of pop culture itself! This is no mere
                  academic exercise, friends. We'll explore the magic behind
                  shared passions, the thrill of friendly rivalry, the sneaky
                  charm of disguised learning, and the contagious joy of pure,
                  unadulterated play while side by side you keep reading my take
                  on popular culture (No worries if you got the options wrong my
                  writings will still be a takeaway){' '}
                </h1>
                <h1 className=' text-black w-[100%] md:text-2xl text-md  rounded-lg font-["nunito"]'>
                  In screens aglow, and minds ablaze, Where trivia's torch
                  forever plays, Popular culture weaves its spell, With quiz and
                  game, a vibrant shell. Let's unleash the quiz, Are you ready?
                </h1>
                <div>
                  <button
                    onClick={() => setHome(false)}
                    className={`text-[#001437] hover:bg-[#001437]  border hover:border-[#ff7db8]  bg-[#ff7db8]   hover:text-[#ee2a7b] md:text-[16px] font-bold md:px-6 text-sm text-md px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer`}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className='relative p-2 md:px-20 px-1'>
              <Particles
                className='absolute'
                id='tsparticles'
                particlesLoaded={particlesLoaded}
                options={particlesConfig1}
                style={{ zIndex: 1 }} // Set a lower zIndex for particles
              />
              <div className='flex flex-col'>
                <div className='z-10'>
                  <button
                    onClick={() => setHome(true)}
                    className={`   my-2 text-[#001437]  bg-[#ff7db8] hover:bg-[#001437] hover:text-[#ff7db8]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                  >
                    Home
                  </button>
                </div>
                <div className='flex  flex-col relative  w-full items-center justify-center'>
                  <img src={header} alt='home' title='h' className="w-full" />
                  <button
                    onClick={() => setHome(false)}
                    className={`absolute md:text-[100px] text-[25px] bg-black text-white rounded-lg px-2`}
                  >
                    Pro Tradition
                  </button>
                </div>
                <div className='md:pt-4 pt-2 md:pb-4 pb-2 flex z-10 flex-col'>
                  <p className='text-xl shadow-md py-2 px-3 bg-#F99DBC'>Quiz</p>
                  {/* {console.log('chjeckkc', Questions['0'])} */}
                  <div className='md:p-4  flex md:flex-row flex-col-reverse md:gap-20 gap-5'>
                    <div className='bg-[#F99DBC]'>
                      {Questions[currentPage].map((q, index) => (
                        <div
                          className='md:pl-3 md:pb-3 pl-2 flex flex-col'
                          key={`questions_${index}`}
                        >
                          <div className='flex   md:items-center'>
                            <p className="md:text-lg text-md md:py-2 pt-2 font-['Poppins']">
                              {q.question}
                              {q.status === '0' ? (
                                <span className='text-red-600 md:px-3'>
                                  *Wrong answer
                                </span>
                              ) : null}
                              {q.status === '1' ? (
                                <span className='text-green-500 md:px-3'>
                                  *Correct answer
                                </span>
                              ) : null}
                            </p>
                          </div>
                          {console.log('checkingasdasdas', q.options)}
                          {q.options.map((data, ind) => (
                            <div
                              key={ind}
                              className='flex hover:cursor-pointer  items-center md:mb-3 mb-2'
                            >
                              <input
                                className='w-4 h-4 m-2 text-blue-600 bg-gray-100 hover:bg-blue-300 rounded border-gray-300 focus:ring-blue-500'
                                type='radio'
                                name={`${currentPage}_${index}_${ind}`}
                                id={`checker_${currentPage}_${index}_${ind}`}
                                checked={q.answer[ind]}
                                value={ind}
                                onChange={(e) => onChangeAnswer(e)}
                              />

                              <label
                                htmlFor={`checker_${currentPage}_${index}_${ind}`}
                                className='block bg-white border min-w-[300px] md:min-w-[400px] hover:cursor-pointer rounded-lg hover:bg-blue-300  border-blue-400 px-2 py-1  text-sm font-medium text-gray-900'
                              >
                                {data.value}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    {currentPage === 0 ? (
                      <p className='w-full h-[250px]  overflow-auto md:h-full  shadow-xl p-5 mt-3 rounded-lg md:mt-12'>
                        <h1 className='font-bold'>Pop: </h1>What if I'm not just
                        an easy-peasy word, but an oxford companion to be cool
                        why don't you try and understand me?{' '}
                        <h1 className='font-bold'>Trad:</h1> Oh, you son of a
                        palindrome! Pride of holding a ticket to your own
                        wonderland, makes me wonder if you at all realise you
                        first grew as my counter movement but soon you started
                        taking my sons and daughters into your realm of
                        "traditional popular”?{' '}
                        <h1 className='font-bold'>Pop:</h1>
                        Oh, Trad you sad? I can't stop my urge to dedicate you a
                        "moye moye" reel. You gotta see it. Also, on that
                        palindrome thing I got pretty offended. Call me anything
                        but not the boring maths. How about tic tac toe, you
                        know games are really my kinda thing.{' '}
                        <h1 className='font-bold'>Trad:</h1> Do I ever have a
                        choice?
                        <h1 className='font-bold'>Pop:</h1>
                        <img src={Pic} alt='pic1' className='w-full' />
                        Offcourse not (give me a hi-fi) It's my world and thank
                        me for letting you live in it.{' '}
                        <h1 className='font-bold'>Pop:</h1> Just kidding. Take a
                        chill-pill till the time I get you a husband-wife joke
                        from the WhatsApp university. You have no idea how
                        hilarious they have become. For your taste buds I’ll
                        pick something moderate-{' '}
                        <h1 className='font-bold'>Trad:</h1> Is this all a joke
                        to you? For joke is something you’ve been always
                        concerned about. <h1 className='font-bold'>Pop:</h1>
                        Why so serious bro? Take a chill pill or make yourself anu
                        cup of ‘Dalgona Coffee’. Don’t tell me you haven’t heard
                        of it? <h1 className='font-bold'>Trad: </h1>No, I
                        haven't nor I intend to. Happy with the confined space I
                        have for sharing the narratives.
                        <h1 className='font-bold'>Pop:</h1> Babe, you got to be
                        creative. Ain't there any fun in telling the Norse sagas
                        and legends when you can grab some popcorn and watch the
                        whole goddammit Vikings!!!{' '}
                        <h1 className='font-bold'>Trad:</h1> I seriously don't
                        think, this is going to work out.{' '}
                        <h1 className='font-bold'>Pop:</h1>
                        “Don't go, don't— Don't go, don't go” as Justin Bieber
                        would call it. <h1 className='font-bold'>Trad:</h1> We
                        are so different. Our languages are different. It's just
                        complicated. <h1 className='font-bold'>Pop: </h1>Honey,
                        we are like Barney Stinson and Robin Scherbatsky "a
                        legen-wait-for-it-dary couple”. Chuck it, let's
                        understand this in your language we are like Dante and
                        Beatrice.
                        <img src={Pic} alt='pic1' className='w-full' />
                        <h1 className='font-bold'>Trad:</h1> I doubt! Though we
                        do have a similarity with them like you know me so well
                        just like Dante was aware of her beloved and I like
                        Beatrice (hadn't met Dante more than twice) have no clue
                        about you. <h1 className='font-bold'>Pop:</h1> How about
                        I make you a list of pop music, shows ranging from Young
                        Sheldon to The family man, from Darlings to Animal, from
                        Taylor Swift to Lady Gaga and what not so you get to
                        know me better before hopping on to a conclusion and you
                        know I just can't hang on to something for long(that is
                        just who I am) so let's catch up later maybe. I have a
                        lot of work piled up on my ChatGPT-Ah! I can't even ask
                        AI to write a poem on how to "convince your partner to
                        give one more chance to their relationship". AI is a
                        part of me too. This sucks. Sometimes I wish I was like
                        you. I was you. Just sometimes.{' '}
                        <h1 className='font-bold'>Fun fact:</h1> There is no
                        such thing like ‘Popradation’. I made this up using-
                        Pop+rad(traditional)+ation(conversation) Indirect
                        reference to popular culture in the above conversation-
                        Robin and Barney from the popular sitcom How I met your
                        mother, meme-Why so serious bro, TV show- Vikings,
                        popular trends on Instagram during covid like Dalgona
                        and the other references are quite direct and are
                        mentioned then and there.
                      </p>
                    ) : null}
                    {currentPage === 1 ? (
                      <p className='w-full h-[250px]  overflow-auto md:h-full  shadow-xl p-5 mt-3 rounded-lg md:mt-12'>
                        <h1 className='font-bold'>Popping the Answer</h1>

                        <h1 className='font-bold'>
                          {' '}
                          We still breathing out of a tube
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Or living for eighty and four years
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Or that tube blows some life stranded
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          The tools are coming in eight shades
                        </h1>
                        <h1 className='font-bold'>
                          Tools of life,adding an year and again an year
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Lend me your ear while you gnaw{' '}
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Protest against the shades and the rights
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Both have come in a single wash of the wave
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          You want your woods to not seep water
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          You want your ocean to touch not sky{' '}
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Well when you popped babe after babe
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          Did you pop the idea or any plan did you bade{' '}
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          What shall they eat and what shall they earn{' '}
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          It’s not some riddle for which you yearn
                        </h1>
                        <h1 className='font-bold'>
                          {' '}
                          blocks on the earths face
                        </h1>
                        <h1 className='font-bold'> colours on the wall </h1>
                        <h1 className='font-bold'> food for the babe</h1>
                        <h1 className='font-bold'> and shade of a hall</h1>
                        <h1 className='font-bold'>
                          {' '}
                          what did you say to the ways of the world?
                        </h1>
                      </p>
                    ) : null}
                    {currentPage === 2 ? (
                      <p className='w-full h-[250px]  overflow-auto md:h-full  shadow-xl p-5 mt-3 rounded-lg md:mt-12'>
                        <h1 className='font-bold'>Pop:</h1>
                        Oh, Trad you sad? I can't stop my urge to dedicate you a
                        "moye moye" reel. You gotta see it. Also, on that
                        palindrome thing I got pretty offended. Call me anything
                        but not the boring maths. How about tic tac toe, you
                        know games are really my kinda thing.{' '}
                        <h1 className='font-bold'>Trad:</h1> Do I ever have a
                        choice?
                        <h1 className='font-bold'>Pop:</h1>
                        <img src={Pic} alt='pic1' className='w-full' />
                        Offcourse not (give me a hi-fi) It's my world and thank
                        me for letting you live in it.{' '}
                        <h1 className='font-bold'>Pop:</h1> Just kidding. Take a
                        chill-pill till the time I get you a husband-wife joke
                        from the WhatsApp university. You have no idea how
                        hilarious they have become. For your taste buds I’ll
                        pick something moderate-{' '}
                        <h1 className='font-bold'>Trad:</h1> Is this all a joke
                        to you? For joke is something you’ve been always
                        concerned about. <h1 className='font-bold'>Pop:</h1>
                        Why so serious bro? Take a chill pill or make yourself a
                        cup of ‘Dalgona Coffee’. Don’t tell me you haven’t heard
                        of it? <h1 className='font-bold'>Trad: </h1>No, I
                        haven't nor I intend to. Happy with the confined space I
                        have for sharing the narratives.
                        <h1 className='font-bold'>Pop:</h1> Babe, you got to be
                        creative. Ain't there any fun in telling the Norse sagas
                        and legends when you can grab some popcorn and watch the
                        whole goddammit Vikings!!!{' '}
                        <h1 className='font-bold'>Trad:</h1> I seriously don't
                        think, this is going to work out.{' '}
                        <h1 className='font-bold'>Pop:</h1>
                        “Don't go, don't— Don't go, don't go” as Justin Bieber
                        would call it. <h1 className='font-bold'>Trad:</h1> We
                        are so different. Our languages are different. It's just
                        complicated. <h1 className='font-bold'>Pop: </h1>Honey,
                        we are like Barney Stinson and Robin Scherbatsky "a
                        legen-wait-for-it-dary couple”. Chuck it, let's
                        understand this in your language we are like Dante and
                        Beatrice.
                        <h1 className='font-bold'>Trad:</h1> I doubt! Though we
                        do have a similarity with them like you know me so well
                        just like Dante was aware of her beloved and I like
                        Beatrice (hadn't met Dante more than twice) have no clue
                        about you. <h1 className='font-bold'>Pop:</h1> How about
                        I make you a list of pop music, shows ranging from Young
                        Sheldon to The family man, from Darlings to Animal, from
                        Taylor Swift to Lady Gaga and what not so you get to
                        know me better before hopping on to a conclusion and you
                        know I just can't hang on to something for long(that is
                        just who I am) so let's catch up later maybe. I have a
                        lot of work piled up on my ChatGPT-Ah! I can't even ask
                        AI to write a poem on how to "convince your partner to
                        give one more chance to their relationship". AI is a
                        part of me too. This sucks. Sometimes I wish I was like
                        you. I was you. Just sometimes.{' '}
                        <h1 className='font-bold'>Fun fact:</h1> There is no
                        such thing like ‘Popradation’. I made this up using-
                        Pop+rad(traditional)+ation(conversation) Indirect
                        reference to popular culture in the above conversation-
                        Robin and Barney from the popular sitcom How I met your
                        mother, meme-Why so serious bro, TV show- Vikings,
                        popular trends on Instagram during covid like Dalgona
                        and the other references are quite direct and are
                        mentioned then and there.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className='flex z-10 md:pl-5 md:gap-x-3 gap-1'>
                  <button
                    onClick={() => scrollToBottom()}
                    className={`text-[#001437]  bg-white hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-2 py-2  text-center font-['nunito'] cursor-pointer  `}
                  >
                    {showHints ? 'Hide hints' : 'Show hints'}
                  </button>
                  <button
                    onClick={() => onValidate()}
                    className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-2 py-2  text-center font-['nunito'] cursor-pointer  `}
                  >
                    {canMove ? 'Next Page' : 'Check Your answer'}
                  </button>
                  {console.log(
                    'hsdfjsdf',
                    currentPage,
                    Object.keys(Questions).length
                  )}
                  {currentPage < Object.keys(Questions).length - 1 ? (
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => prev + 1)
                        scrollToTop()
                      }}
                      className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-2 py-2 text-center font-['nunito'] cursor-pointer  `}
                    >
                      Skip
                    </button>
                  ) : null}
                  {currentPage > 0 ? (
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => prev - 1)
                        scrollToTop()
                      }}
                      disabled={currentPage <= 0}
                      className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-2 py-2 text-center font-['nunito'] cursor-pointer  `}
                    >
                      Prev page
                    </button>
                  ) : null}
                </div>
                {showHints ? (
                  <div className='flex flex-wrap bg-white z-10 md:px-2 px-1 py-1 md:m-6 m-2 gap-2 border border-slate-300 rounded-lg'>
                    {shuffleArray(answers[currentPage]).map((answer, index) => (
                      <p
                        className='py-0.5 px-2 bg-pink-300 rounded-lg md:text-lg text-md'
                        key={`answers_${index}`}
                      >
                        {answer}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
