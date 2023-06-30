const fetch = require("node-fetch");

const HypeMan = {
     getRandom(max) {
          return Math.floor(Math.random() * max);
     },
     async quote() {
          try {
               const response = await fetch("https://zenquotes.io/api/random");
               const data = await response.json();
               const quote = `"${data[0]["q"]}" - ${data[0]["a"]}`;
               return quote;
          } catch (error) {
               console.error('Error fetching data:', error.message);
               return "Sorry, couldn't think of anything inpirational 😔";
          }
     },
     static(queryNum = 29) {
          queryNum = queryNum || 29;
          const data = res;
          const query = data.responses[queryNum];
          const ans = query.answers[HypeMan.getRandom(query.answers.length)];
          return (ans) ? ans : "ok";
     },
     staticRes: [
          "I'm feeling down today",
          "I'm not making progress in my goals",
          "I feel overwhelmed by my workload",
          "I'm feeling unmotivated",
          "I need some encouragement",
          "I'm feeling stuck in a rut",
          "I'm feeling overwhelmed by the future",
          "I'm struggling with self-doubt",
          "I'm having trouble staying focused",
          "I need a boost of creativity",
          "I'm struggling to find motivation in my daily tasks",
          "I feel like giving up",
          "I'm facing criticism and it's affecting me",
          "I'm feeling stuck and don't know how to move forward",
          "I need a reminder of my potential",
          "I'm feeling demotivated and uninspired",
          "hi",
          "sad",
          "angry",
          "frustrated",
          "help me",
          "not ok",
          "cry",
          "I don't know what to do",
          "Thanks",
          "damn",
          "word",
          "Can I bag",
          "deep",
          "Utter Rubbish"
     ],
     feedbackRes: [
          "thx",
          "thanks",
          "I will try",
          "Aii bro",
          "thnx"
     ],
     sadWords: [
          "depress",
          "sad",
          "frustrat",
          "angry",
          "lonely",
          "not ok",
          "suicid",
          "bad",
          "unhappy",
          "not happy"
     ]
}

module.exports = HypeMan;

const res = {
     "responses": [
          {
               "query": "I'm feeling down today.",
               "answers": [
                    "Remember that tough times don't last, but tough people do! You've got this!",
                    "Cheer up! You're stronger than you think, and brighter days are just around the corner.",
                    "Don't let today's challenges overshadow your amazing potential. You're capable of great things!",
                    "Take a deep breath, clear your mind, and focus on the positive. You have the strength to overcome any obstacle."
               ]
          },
          {
               "query": "I'm not making progress in my goals.",
               "answers": [
                    "Progress takes time and effort. Keep pushing forward, and remember that even small steps count!",
                    "Don't be discouraged by temporary setbacks. Stay committed, and your determination will lead you to success.",
                    "Think of every setback as an opportunity to learn and grow. Trust in your abilities and keep striving for greatness!",
                    "You're on a journey, and progress may not always be linear. Stay focused on your goals and celebrate even the smallest victories."
               ]
          },
          {
               "query": "I feel overwhelmed by my workload.",
               "answers": [
                    "Take a moment to prioritize your tasks and break them down into manageable steps. You've got this!",
                    "Remember, one step at a time. Focus on what's in front of you, and soon enough, you'll conquer your workload.",
                    "Don't hesitate to ask for help or delegate tasks when needed. You're not alone, and together we can lighten the load.",
                    "Take a short break, clear your mind, and then tackle your workload with renewed energy. You're capable of great things!"
               ]
          },
          {
               "query": "I'm feeling unmotivated.",
               "answers": [
                    "Remember why you started. Visualize your goals and imagine the incredible feeling of accomplishment that awaits you.",
                    "Surround yourself with positive energy. Listen to uplifting music, read inspiring quotes, and connect with supportive people.",
                    "Take a moment to reflect on your past achievements. You've overcome challenges before, and you can do it again!",
                    "Sometimes motivation comes from taking that first step. Start with a small task, and as you gain momentum, your motivation will grow."
               ]
          },
          {
               "query": "I need some encouragement.",
               "answers": [
                    "Believe in yourself, because I believe in you! You have the strength and resilience to overcome any obstacle.",
                    "Remember that every challenge you face is an opportunity for growth. Embrace the journey and keep moving forward!",
                    "You're stronger than you realize, and your potential is limitless. Keep pushing through, and you'll achieve great things.",
                    "You're capable of amazing things. Don't let self-doubt hold you back. Embrace your potential and let your light shine!"
               ]
          },
          {
               "query": "I'm feeling stuck in a rut.",
               "answers": [
                    "Change up your routine! Try something new or explore a different hobby. A fresh perspective can spark inspiration.",
                    "Take a moment to reflect on your accomplishments and the progress you've made. Celebrate how far you've come!",
                    "Remember that setbacks and plateaus are normal. Keep pushing forward, and you'll soon break through to new heights.",
                    "Embrace the power of positive thinking and envision yourself breaking free from the rut. You have the strength to make it happen!"
               ]
          },
          {
               "query": "I'm feeling overwhelmed by the future.",
               "answers": [
                    "Take it one step at a time. Focus on what you can control in the present moment.",
                    "The future is full of possibilities. Embrace uncertainty and trust that everything will work out for the best.",
                    "Remember that you have the power to shape your own future. Set goals, make plans, and take action.",
                    "Don't let the fear of the unknown hold you back. Embrace the adventure that lies ahead!"
               ]
          },
          {
               "query": "I'm struggling with self-doubt.",
               "answers": [
                    "You are capable of amazing things. Believe in yourself and trust your abilities.",
                    "Challenge those negative thoughts and replace them with positive affirmations. You are deserving of success.",
                    "Celebrate your achievements and remember that each one is a testament to your skills and determination.",
                    "Surround yourself with supportive people who believe in you. Their belief can fuel your own self-confidence."
               ]
          },
          {
               "query": "I'm having trouble staying focused.",
               "answers": [
                    "Create a clear plan and set specific goals. Break them down into smaller tasks to stay motivated and focused.",
                    "Eliminate distractions and create a productive environment that fosters concentration.",
                    "Use time management techniques such as the Pomodoro Technique to work in focused bursts with short breaks in between.",
                    "Visualize the end result and remind yourself of the rewards that await you once you stay focused and complete your tasks."
               ]
          },
          {
               "query": "I need a boost of creativity.",
               "answers": [
                    "Step outside your comfort zone and explore new experiences. Creativity often thrives in unfamiliar territory.",
                    "Engage in activities that inspire you, such as reading, listening to music, or immersing yourself in nature.",
                    "Collaborate and brainstorm with others. Sharing ideas can spark new and innovative solutions.",
                    "Embrace failure as part of the creative process. Don't be afraid to take risks and learn from mistakes."
               ]
          },
          {
               "query": "I'm struggling to find motivation in my daily tasks.",
               "answers": [
                    "Connect your tasks to a greater purpose or meaningful goal. Understanding the why behind your actions can increase motivation.",
                    "Break down your tasks into smaller, manageable steps. Celebrate progress along the way to maintain motivation.",
                    "Reward yourself for completing tasks or reaching milestones. Positive reinforcement can be a powerful motivator.",
                    "Find inspiration in others who have achieved what you aspire to. Their stories can ignite your motivation and drive."
               ]
          },
          {
               "query": "I feel like giving up.",
               "answers": [
                    "Remember that setbacks are temporary. Keep pushing forward, and you'll emerge stronger and more resilient.",
                    "Reach out to a support system of friends, family, or mentors who can provide encouragement and perspective.",
                    "Take a break and engage in self-care activities that rejuvenate your mind, body, and spirit.",
                    "Visualize the future version of yourself who has overcome challenges and achieved success. Let that vision fuel your determination."
               ]
          },
          {
               "query": "I'm facing criticism and it's affecting me.",
               "answers": [
                    "Consider the source of the criticism and evaluate its validity. Not all feedback is constructive or helpful.",
                    "Focus on self-improvement rather than seeking validation from others. Use criticism as an opportunity to grow and learn.",
                    "Surround yourself with supportive and uplifting people who believe in your abilities and cheer you on.",
                    "Remember that criticism is often a reflection of the critic's insecurities or biases, not your worth or potential."
               ]
          },
          {
               "query": "I'm feeling stuck and don't know how to move forward.",
               "answers": [
                    "Take a step back and assess the situation from a different perspective. Fresh insights can help you see new possibilities.",
                    "Seek guidance from someone you trust, whether it's a mentor, coach, or friend. They may offer valuable advice or a different point of view.",
                    "Break out of your comfort zone and try something new. Exploring uncharted territory can lead to unexpected breakthroughs.",
                    "Embrace failure as a learning opportunity. Sometimes, the path to success is paved with setbacks and detours."
               ]
          },
          {
               "query": "I need a reminder of my potential.",
               "answers": [
                    "You have unlimited potential within you. Believe in yourself and tap into your inner strengths.",
                    "Reflect on past achievements and milestones. Remind yourself of what you're capable of achieving.",
                    "Surround yourself with positive affirmations and inspirational quotes that remind you of your limitless potential.",
                    "Remember that greatness often comes from embracing challenges and pushing beyond your perceived limits."
               ]
          },
          {
               "query": "I'm feeling demotivated and uninspired.",
               "answers": [
                    "Reconnect with your passions and hobbies. Engaging in activities you love can reignite your motivation.",
                    "Set new goals or revisit existing ones. Creating a clear vision of what you want to achieve can reignite your sense of purpose.",
                    "Seek inspiration from books, podcasts, or TED Talks that align with your interests or goals.",
                    "Surround yourself with positive, motivated individuals who can inspire and uplift you on your journey."
               ]
          },
          {
               "query": "hi.",
               "answers": [
                    "hello",
                    "hii",
                    "What's going on",
                    "What's up?"
               ]
          },
          {
               "query": "I'm sad.",
               "answers": [
                    "I'm sorry to hear that. Remember that it's okay to feel sad sometimes. Take your time to process your emotions, and reach out to someone you trust for support.",
                    "I'm here for you. Remember that even on your darkest days, there's always a glimmer of hope waiting to shine through. Hang in there!",
                    "Sadness is a natural part of life. Take a moment to do something that brings you joy, whether it's listening to your favorite music, watching a funny video, or spending time with loved ones.",
                    "Sadness can be overwhelming, but it won't last forever. Reach out to someone who can provide comfort, and remember that brighter days are ahead."
               ]
          },
          {
               "query": "I'm angry.",
               "answers": [
                    "I understand that anger can be overwhelming. Take a deep breath and try to find a healthy outlet for your emotions, such as talking to a friend or engaging in physical activity.",
                    "Anger is a normal human emotion. Take a step back and assess the situation. Consider if there's a constructive way to address the issue that caused your anger.",
                    "It's okay to be angry, but it's important to express it in a healthy way. Find a productive outlet, like writing in a journal or channeling your energy into a creative project.",
                    "Anger can cloud our judgment. Take a moment to calm down and regain your composure. Reflect on the situation with a clear mind before taking any actions you may regret."
               ]
          },
          {
               "query": "I'm frustrated.",
               "answers": [
                    "Frustration can be challenging, but remember that it's often a sign that you're pushing yourself. Take a break, gather your thoughts, and approach the situation with a fresh perspective.",
                    "Frustration can be a stepping stone to growth. Embrace the challenges you're facing, knowing that each hurdle you overcome brings you closer to success.",
                    "Sometimes, frustrations arise from expecting too much of ourselves. Be kind to yourself and acknowledge that progress takes time. Celebrate small victories along the way.",
                    "Frustration is temporary. Keep your eyes on the bigger picture and trust that your efforts will pay off in due time. Remember, you're capable of overcoming any obstacle!"
               ]
          },
          {
               "query": "Help me.",
               "answers": [
                    "I'm here for you. Let's take a deep breath together. Remember that you're not alone, and it's okay to ask for help. Reach out to someone you trust and share what you're going through.",
                    "You're not alone in this. Reach out to a supportive friend or family member and let them know what you're going through. Sometimes, sharing our burdens lightens the load.",
                    "When you feel overwhelmed, it's important to seek support. Reach out to someone you trust, and together we can find a way through this challenging time.",
                    "I'm here to help. Remember that asking for help is a sign of strength, not weakness. Reach out to someone who can provide guidance or support in navigating your current situation."
               ]
          },
          {
               "query": "Everything is not okay.",
               "answers": [
                    "I'm sorry to hear that you're feeling this way. Remember that it's okay to not be okay sometimes. Reach out to someone you trust for support and share what you're going through.",
                    "It's okay to feel overwhelmed when everything seems to be falling apart. Take things one step at a time and focus on small actions that can bring you a sense of stability and progress.",
                    "I understand that things may feel chaotic right now. Take a moment to breathe and remind yourself that you're strong enough to handle whatever comes your way. Reach out for support if needed.",
                    "Even when everything seems to be going wrong, remember that you have the strength to endure and overcome. Lean on your support system and take small steps towards finding stability and peace."
               ]
          },
          {
               "query": "I wanna cry.",
               "answers": [
                    "It's okay to cry. Let your tears flow, as they can help release built-up emotions and provide a sense of relief. Remember, you're allowed to feel vulnerable.",
                    "Crying can be cathartic. Find a safe and comfortable space where you can let your emotions out. Remember that tears are a sign of strength, not weakness.",
                    "Sometimes, a good cry can be cleansing for the soul. Allow yourself to feel the emotions and embrace the healing power of tears. You're not alone in this.",
                    "Crying can be a healthy way to release pent-up emotions. Find a quiet place where you can let it out, and know that it's a normal part of being human."
               ]
          },
          {
               "query": "I don't know what to do.",
               "answers": [
                    "Uncertainty can be overwhelming, but remember that it's okay not to have all the answers. Take a deep breath, focus on the present moment, and trust that the path will become clearer in time.",
                    "When you're unsure of what to do, start by taking small steps. Break down the situation into manageable parts, and tackle them one at a time. Remember that progress is made through action.",
                    "It's normal to feel lost or unsure at times. Seek guidance from someone you trust or take time to reflect on your values and priorities. Trust yourself, and remember that you have the wisdom to navigate your own journey.",
                    "Feeling unsure is a part of life's journey. Embrace the uncertainty as an opportunity for growth and exploration. Reach out to someone you trust for advice or simply take a moment to listen to your inner voice."
               ]
          },
          {
               "query": "Thanks",
               "answers": [
                    "You're Welcome, fam",
                    "No Prob",
                    "Uwc"
               ]
          },
          {
               "query": "damn",
               "answers": [
                    "fr",
                    "fr fr",
                    "ong bruh"
               ]
          },
          {
               "query": "word",
               "answers": [
                    "fr",
                    "fr fr",
                    "ong bruh"
               ]
          },
          {
               "query": "Can I bag",
               "answers": [
                    "Ofc you can, she want youu",
                    "Yes, go for it!!",
                    "Bruh, she want youuu",
                    "Obv, she want ur D"
               ]
          },
          {
               "query": "word",
               "answers": [
                    "fr",
                    "fr fr",
                    "ong bruh"
               ]
          },
          {
               "query": "Utter Rubbish",
               "answers": [
                    "Sorry, I don't understand what you're saying",
                    "Can you rephrase that? Cuz I dunno what u saying",
                    "Sorry bruh, this beyond my capabilities",
                    "I wasn't trained to answer this, try again",
               ]
          }
     ]
}