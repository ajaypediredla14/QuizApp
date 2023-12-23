import logo from './logo.svg'
import './App.css'
import header from './assets/header.png'
import Home from './assets/home.jpg'
import { useState } from 'react'
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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
          { id: 3, value: 'Bridgerton          ' },
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
    2: [
      {
        question: '1. what is present in toothpaste?3',
        options: [
          { id: 1, value: 'options1' },
          { id: 2, value: 'options1' },
          { id: 3, value: 'options1' },
          { id: 4, value: 'options1' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
        status: '',
      },
      {
        question: '2. what is present in toothpaste?3',
        options: [
          { id: 1, value: 'options1' },
          { id: 2, value: 'options1' },
          { id: 3, value: 'options1' },
          { id: 4, value: 'options1' },
        ],
        answer: [false, false, false, false],
        correct_answer: [false, true, false, false],
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
    0: ['salt', 'salt1'],
    1: ['salt2', 'salt3'],
    2: ['salt4', 'salt5'],
  })
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const onChangeAnswer = (e) => {
    const [currentPage_index, Question_index, option_index] = e.target.name.split("_");
    const question = { ...Questions }
    const tempvalues = new Array(4).fill(
      false
    );
    tempvalues[option_index] = true;
    question[currentPage_index][Question_index].answer = tempvalues;
    // // console.log("checking", question)
    setQuestions(question)
  }

  function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
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
        console.log("checkin", question[currentPage][i])
        if (arraysAreEqual(question[currentPage][i].answer, question[currentPage][i].correct_answer)

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
            className="absolute"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
            style={{ zIndex: 1 }} // Set a lower zIndex for particles
          />
          <div className="flex  flex-col z-10 items-center justify-center gap-5"> {/* Set a higher zIndex for content */}

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
            <div className='flex flex-col relative bg-white gap-5 h-[90vh] items-center justify-center'>
              <Particles
                className="absolute"
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
                style={{ zIndex: 1 }} // Set a lower zIndex for particles
              />
              <div className="flex  flex-col z-10 items-center justify-center gap-5"> {/* Set a higher zIndex for content */}
                <p className="w-[70%] shadow-xl bg-white p-5 rounded-lg">
                  Attention, pop culture aficionados! Hold onto your fandom hats
                  and trivia trophies, folks, because we're diving deep into the
                  captivating world of engagement! In the vibrant playground of
                  pop culture, where attention spans are shorter than TikTok
                  dances and trends shift faster than a superhero's cape, one tool
                  reigns supreme: The Quiz. So, Buckle up, because we're about to
                  dive into the irresistible context of pop culture itself! This
                  is no mere academic exercise, friends. We'll explore the magic
                  behind shared passions, the thrill of friendly rivalry, the
                  sneaky charm of disguised learning, and the contagious joy of
                  pure, unadulterated play while side by side you keep reading my
                  take on popular culture (No worries if you got the options wrong
                  my writings will still be a takeaway) In screens aglow, and
                  minds ablaze, Where trivia's torch forever plays, Popular
                  culture weaves its spell, With quiz and game, a vibrant shell.
                  Let's unleash the quiz, Are you ready?
                </p>
                <div>

                  <button
                    onClick={() => setHome(false)}
                    className={`text-[#001437] border hover:border-[#BCFB46]  bg-[#BCFB46] hover:bg-transparent  hover:text-[#a0db32] md:text-[16px] font-bold md:px-6 text-sm text-md px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer`}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>

          ) : (
            <div className='relative p-2 px-20'>
              <Particles
                className="absolute"
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig1}
                style={{ zIndex: 1 }} // Set a lower zIndex for particles
              />
              <div className="flex flex-col">
                <div className="z-10">
                  <button
                    onClick={() => setHome(true)}
                    className={`   my-2 text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                  >
                    Home
                  </button>
                </div>
                <div className='flex  flex-col relative  w-full items-center justify-center'>
                  <img src={header} alt='home' title='h' />
                  <button
                    onClick={() => setHome(false)}
                    className={`absolute text-[100px] bg-black text-white rounded-lg px-2`}
                  >
                    Pro Tradition
                  </button>
                </div>
                <div className='flex z-10 flex-col'>
                  <p className='text-xl shadow-md py-2 px-3 bg-cyan-300'>
                    Quiz 1
                  </p>
                  {/* {console.log('chjeckkc', Questions['0'])} */}
                  <div className='flex gap-20'>
                    <div>
                      {Questions[currentPage].map((q, index) => (
                        <div className='pl-3 pb-3 flex flex-col' key={`questions_${index}`}>
                          <div className='flex  items-center'>
                            <p className="text-lg py-2 font-['Poppins']">
                              {q.question}
                            </p>
                            {q.status === '0' ? (
                              <span className='text-red-500 px-3'>*Wrong answer</span>
                            ) : null}
                            {q.status === '1' ? (
                              <span className='text-green-500 px-3'>
                                *Correct answer
                              </span>
                            ) : null}
                          </div>
                          {console.log("checkingasdasdas", q.options)}
                          {q.options.map((data, ind) => (
                            <div key={ind} className="flex hover:cursor-pointer  items-center mb-3">
                              <input
                                className="w-4 h-4 m-2 text-blue-600 bg-gray-100 hover:bg-blue-300 rounded border-gray-300 focus:ring-blue-500"
                                type="radio"
                                name={`${currentPage}_${index}_${ind}`}
                                id={`checker_${currentPage}_${index}_${ind}`}
                                checked={q.answer[ind]}
                                value={ind}
                                onChange={(e) => onChangeAnswer(e)}

                              />

                              <label
                                htmlFor={`checker_${currentPage}_${index}_${ind}`}
                                className="block bg-white border min-w-[400px] hover:cursor-pointer rounded-lg hover:bg-blue-300  border-blue-400 px-2 py-1  text-sm font-medium text-gray-900"

                              >{data.value}</label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <p className="w-[70%] bg-white shadow-xl p-5 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                  </div>
                </div>
                <div className='flex z-10 gap-x-3'>
                  <button
                    onClick={() => setShowHints((prev) => !prev)}
                    className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer  `}
                  >
                    {showHints ? 'Hide hints' : 'Show hints'}
                  </button>
                  <button
                    onClick={() => onValidate()}
                    className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer  `}
                  >
                    {canMove ? 'Next Page' : 'Check Your answer'}
                  </button>
                  {console.log("hsdfjsdf", currentPage, Object.keys(Questions).length)}
                  {(currentPage < Object.keys(Questions).length - 1) ? (
                    <button
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 rounded-full text-center font-['nunito'] cursor-pointer  `}
                    >
                      Next Page
                    </button>
                  ) : null}
                  {(currentPage > 0) ? (
                    <button
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      disabled={currentPage <= 0}
                      className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                    >
                      Prev page
                    </button>
                  ) : null}
                </div>
                {showHints ? (
                  <div className='flex bg-white z-10 px-2 py-1 m-2 gap-2 border border-slate-300 rounded-lg'>
                    {shuffleArray(answers[currentPage]).map((answer, index) => (
                      <span className='py-0.5 px-2 bg-green-600 rounded-lg text-lg'>
                        {answer}
                      </span>
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

