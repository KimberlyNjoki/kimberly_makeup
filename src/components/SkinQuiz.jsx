import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkinQuiz.css'; // Make sure this file exists and is correctly placed.

const questions = [
  {
    question: "How does your skin feel a few hours after washing it?",
    options: [
      { text: "Tight and dry", value: "dry" },
      { text: "Oily and shiny", value: "oily" },
      { text: "Mostly comfortable", value: "normal" },
      { text: "Oily in some areas, dry in others", value: "combination" }
    ]
  },
  {
    question: "How often do you experience breakouts?",
    options: [
      { text: "Rarely", value: "normal" },
      { text: "Often in the T-zone", value: "combination" },
      { text: "Frequently all over", value: "oily" },
      { text: "Rare but dry patches show", value: "dry" }
    ]
  },
  {
    question: "How does your skin look by midday?",
    options: [
      { text: "Dry and flaky", value: "dry" },
      { text: "Balanced and fresh", value: "normal" },
      { text: "Shiny all over", value: "oily" },
      { text: "Shiny T-zone, dry cheeks", value: "combination" }
    ]
  },
  {
    question: "How visible are your pores?",
    options: [
      { text: "Small and barely visible", value: "dry" },
      { text: "Visible on nose and forehead", value: "combination" },
      { text: "Large and visible", value: "oily" },
      { text: "Evenly small", value: "normal" }
    ]
  }
];

const tips = {
  dry: [
    "Moisturize frequently, use hydrating serums, and avoid harsh cleansers.",
    "Use a gentle, hydrating cleanser to avoid stripping your skin's natural oils."
  ],
  oily: [
    "Use oil-free products, blotting paper, and avoid over-cleansing.",
    "Try using a mattifying primer or setting powder to control oil throughout the day."
  ],
  combination: [
    "Use gentle, balancing products that target both oily and dry areas.",
    "Focus on hydrating the dry parts while keeping oil under control in the T-zone."
  ],
  sensitive: [
    "Stick to hypoallergenic, fragrance-free products and test before applying.",
    "Use calming ingredients like aloe vera or chamomile to soothe irritation."
  ],
  normal: [
    "Maintain a simple routine: cleanse, tone, moisturize, and use SPF daily.",
    "Since your skin is balanced, use mild products to maintain its natural health."
  ]
};

const SkinQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [step]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === questions.length - 1) {
      const skinType = determineSkinType();
      setSubmitted(true);
      setAnswers({ ...answers, skinType });
    } else {
      setStep(step + 1);
    }
  };

  const determineSkinType = () => {
    const skinCount = {
      dry: 0,
      oily: 0,
      combination: 0,
      sensitive: 0,
      normal: 0
    };

    Object.values(answers).forEach((answer) => {
      skinCount[answer]++;
    });

    const maxSkinType = Object.keys(skinCount).reduce((a, b) => (skinCount[a] > skinCount[b] ? a : b));
    return maxSkinType;
  };

  const getTips = () => {
    const skinType = answers.skinType;
    return tips[skinType] || [];
  };

  return (
    <div className="position-relative min-vh-100">
      <div className="background-layer"></div>
      <div className="overlay"></div>

      <div className="content p-4">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 card shadow p-4 form2">
            {!submitted ? (
              <>
                <h2 className="text-center mb-4">Take the Skin Quiz</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <h5>{questions[step].question}</h5>
                    {questions[step].options.map((option, index) => (
                      <div key={index} className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id={option.value}
                          name="skinType"
                          value={option.value}
                          checked={answers[step] === option.value}
                          onChange={() => handleAnswer(option.value)}
                          required
                        />
                        <label className="form-check-label" htmlFor={option.value}>
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="btn  w-100" style={{
                        backgroundColor: '#cbbdfe',
                        borderColor: '#e89eef',
                        fontWeight: '600',
                      }}>
                    {step === questions.length - 1 ? 'Get My Tips' : 'Next'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h4>Your Skin Type: <span className="text-capitalize">{answers.skinType}</span></h4>
                <div className="mt-3 text-muted">
                  <h5>Skin Care Tips:</h5>
                  <ul>
                    {getTips().map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
                  Return Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinQuiz;
