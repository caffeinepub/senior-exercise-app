export interface Exercise {
  id: bigint;
  title: string;
  repsOrDuration: string;
  difficulty: string;
  description: string;
  steps: string[];
  category: string;
  safetyTips: string[];
  bodyPart: string;
}

export const SAMPLE_EXERCISES: Exercise[] = [
  // STRENGTH
  {
    id: BigInt(1),
    title: "Seated Leg Lifts",
    category: "Strength",
    bodyPart: "Legs & Core",
    difficulty: "Easy",
    repsOrDuration: "10 lifts on each leg",
    description:
      "This gentle exercise strengthens your thigh muscles and helps keep your legs feeling strong and steady. You can do it from the comfort of your own chair.",
    steps: [
      "Sit up tall in a sturdy chair with your feet flat on the floor.",
      "Hold the sides of the chair gently for balance.",
      "Slowly straighten your right leg until it is parallel to the floor.",
      "Hold for a count of 3, then slowly lower your foot back down.",
      "Repeat 10 times on the right leg.",
      "Then switch to the left leg and do 10 more lifts.",
    ],
    safetyTips: [
      "Move slowly and smoothly — there is no need to rush.",
      "Stop if you feel any pain in your knee or hip.",
      "Keep your back straight against the chair throughout.",
    ],
  },
  {
    id: BigInt(2),
    title: "Wall Push-Ups",
    category: "Strength",
    bodyPart: "Arms & Chest",
    difficulty: "Easy",
    repsOrDuration: "8 to 10 push-ups",
    description:
      "Wall push-ups are a gentle way to build arm and chest strength without putting pressure on your wrists or joints. Perfect for all fitness levels.",
    steps: [
      "Stand facing a wall, about arm's length away.",
      "Place both hands flat on the wall at shoulder height and width.",
      "Lean your body toward the wall by bending your elbows.",
      "Stop when your nose is close to the wall — don't force it.",
      "Slowly push yourself back to the starting position.",
      "Repeat 8 to 10 times at a comfortable pace.",
    ],
    safetyTips: [
      "Make sure the wall is solid and won't move.",
      "Keep your feet firmly planted on the floor.",
      "Don't lock your elbows when you push back out.",
    ],
  },
  {
    id: BigInt(3),
    title: "Seated Marching",
    category: "Strength",
    bodyPart: "Legs & Hip Flexors",
    difficulty: "Easy",
    repsOrDuration: "2 minutes of marching",
    description:
      "Seated marching gets your legs moving and your blood flowing. It is a wonderful way to warm up your body and strengthen your hip muscles.",
    steps: [
      "Sit up straight in a firm chair with both feet on the floor.",
      "Lift your right knee up toward your chest as high as is comfortable.",
      "Lower it back down and then lift your left knee.",
      "Continue alternating legs in a slow, steady marching rhythm.",
      "Swing your arms gently as you march if that feels natural.",
      "March for 2 full minutes, resting if you need to.",
    ],
    safetyTips: [
      "Go at your own pace — slow is perfectly fine.",
      "Hold the chair if you feel unsteady.",
      "Breathe normally throughout.",
    ],
  },
  // FLEXIBILITY
  {
    id: BigInt(4),
    title: "Neck Side Stretch",
    category: "Flexibility",
    bodyPart: "Neck & Shoulders",
    difficulty: "Easy",
    repsOrDuration: "Hold 20 seconds each side",
    description:
      "This calming stretch relieves tension in your neck and shoulders — especially helpful if you spend time reading or watching TV. It feels wonderfully soothing.",
    steps: [
      "Sit or stand comfortably with your shoulders relaxed and down.",
      "Gently tilt your head to the right, bringing your ear toward your shoulder.",
      "Do not force it — just let gravity do the work.",
      "Hold this position for 20 seconds while breathing slowly.",
      "Bring your head back to the center.",
      "Now tilt to the left side and hold for another 20 seconds.",
    ],
    safetyTips: [
      "Never jerk or force your head — move gently and slowly.",
      "Skip this exercise if you have a neck injury or recent surgery.",
      "You should feel a gentle stretch, not pain.",
    ],
  },
  {
    id: BigInt(5),
    title: "Seated Hamstring Stretch",
    category: "Flexibility",
    bodyPart: "Back of Legs",
    difficulty: "Easy",
    repsOrDuration: "Hold 30 seconds each leg",
    description:
      "Stretching the back of your legs helps with bending, walking, and getting in and out of chairs more easily. This seated version is very safe and comfortable.",
    steps: [
      "Sit on the edge of a sturdy chair.",
      "Extend your right leg straight out in front of you, heel on the floor.",
      "Keep your back straight and lean forward slightly from your hips.",
      "You should feel a gentle stretch along the back of your right leg.",
      "Hold for 30 seconds while breathing deeply.",
      "Return to normal sitting, then repeat with your left leg.",
    ],
    safetyTips: [
      "Do not round your back — lean from the hips, not the waist.",
      "A gentle pulling feeling is normal; pain is not.",
      "Hold onto the chair if needed for stability.",
    ],
  },
  {
    id: BigInt(6),
    title: "Shoulder Roll",
    category: "Flexibility",
    bodyPart: "Shoulders & Upper Back",
    difficulty: "Easy",
    repsOrDuration: "10 rolls forward, 10 rolls backward",
    description:
      "Shoulder rolls loosen up tension in your shoulders and upper back. They're great to do any time of day, especially after sitting for a while.",
    steps: [
      "Sit or stand comfortably with your arms relaxed at your sides.",
      "Slowly roll both shoulders forward in a big, smooth circle.",
      "Complete 10 forward rolls at a comfortable pace.",
      "Then reverse direction, rolling both shoulders backward.",
      "Complete 10 backward rolls.",
      "Finish by letting your shoulders drop down and relax.",
    ],
    safetyTips: [
      "Keep your movements slow and controlled.",
      "Don't tense up — let your shoulders feel loose and heavy.",
      "Stop if you feel sharp pain in your shoulder joint.",
    ],
  },
  // BALANCE
  {
    id: BigInt(7),
    title: "Standing Heel-to-Toe Walk",
    category: "Balance",
    bodyPart: "Legs & Core",
    difficulty: "Moderate",
    repsOrDuration: "20 steps forward",
    description:
      "Walking heel-to-toe is a classic exercise for improving your balance and steadiness. It trains the same muscles that help prevent falls in everyday life.",
    steps: [
      "Stand near a wall or countertop you can reach if needed.",
      "Place your right foot directly in front of your left foot, heel touching toes.",
      "Extend your arms out to the sides for balance.",
      "Fix your gaze on a point straight ahead of you.",
      "Take another step, placing your left foot in front, heel touching toes.",
      "Continue for 20 steps, staying close to the wall for safety.",
    ],
    safetyTips: [
      "Always do this near a wall or heavy furniture you can grab.",
      "Look straight ahead, not at your feet, for best balance.",
      "Stop immediately if you feel dizzy.",
    ],
  },
  {
    id: BigInt(8),
    title: "Single-Leg Stand",
    category: "Balance",
    bodyPart: "Legs & Ankles",
    difficulty: "Moderate",
    repsOrDuration: "Hold 10 seconds each side, repeat 3 times",
    description:
      "Standing on one foot challenges your balance in a safe, controlled way. Even a few seconds on each side makes a big difference to your stability over time.",
    steps: [
      "Stand behind a sturdy chair and hold the back with both hands lightly.",
      "Stand with your feet hip-width apart and look straight ahead.",
      "Slowly lift your right foot a few inches off the ground.",
      "Balance on your left foot for up to 10 seconds.",
      "Lower your right foot back down carefully.",
      "Repeat on the other side. Do 3 rounds on each foot.",
    ],
    safetyTips: [
      "Always have the chair in front of you to grab if needed.",
      "Do not lock your standing knee — keep a very slight bend.",
      "Start with just 3 to 5 seconds if 10 feels too long.",
    ],
  },
  {
    id: BigInt(9),
    title: "Weight Shifting",
    category: "Balance",
    bodyPart: "Hips & Ankles",
    difficulty: "Easy",
    repsOrDuration: "10 shifts to each side",
    description:
      "Shifting your weight from side to side teaches your body to respond quickly to changes in balance — exactly what you need to stay steady while walking.",
    steps: [
      "Stand with your feet shoulder-width apart near a wall or chair.",
      "Slowly shift your weight onto your right foot.",
      "Hold for 2 to 3 seconds, then shift back to center.",
      "Now slowly shift your weight onto your left foot.",
      "Hold for 2 to 3 seconds, then return to center.",
      "Repeat 10 times on each side.",
    ],
    safetyTips: [
      "Stand near support that you can grab if you wobble.",
      "Move slowly and deliberately — this is not a race.",
      "Keep your feet flat on the floor throughout.",
    ],
  },
  // BREATHING
  {
    id: BigInt(10),
    title: "Deep Belly Breathing",
    category: "Breathing",
    bodyPart: "Lungs & Diaphragm",
    difficulty: "Easy",
    repsOrDuration: "5 to 10 slow breaths",
    description:
      "Deep breathing is one of the most powerful things you can do for your body and mind. It calms your nervous system, improves lung capacity, and reduces stress.",
    steps: [
      "Sit comfortably in a chair with your back supported.",
      "Place one hand on your chest and one on your belly.",
      "Breathe in slowly through your nose for a count of 4.",
      "As you breathe in, let your belly rise — the hand on your belly should move out.",
      "Breathe out slowly through your mouth for a count of 6.",
      "Repeat this cycle 5 to 10 times, enjoying the calm feeling.",
    ],
    safetyTips: [
      "Never force your breathing — let it happen naturally.",
      "If you feel lightheaded, go back to your normal breathing.",
      "This can be done any time you feel anxious or tense.",
    ],
  },
  {
    id: BigInt(11),
    title: "Pursed Lip Breathing",
    category: "Breathing",
    bodyPart: "Lungs & Airways",
    difficulty: "Easy",
    repsOrDuration: "8 to 10 breaths",
    description:
      "Pursed lip breathing helps control your breathing rate and makes each breath more effective. Many people find it very calming and helpful during activity.",
    steps: [
      "Sit comfortably and relax your neck and shoulder muscles.",
      "Keep your mouth closed and breathe in slowly through your nose for 2 counts.",
      "Pucker your lips as if you were about to whistle or blow out a candle.",
      "Breathe out slowly and gently through your puckered lips for 4 counts.",
      "The out-breath should take twice as long as the in-breath.",
      "Repeat 8 to 10 times, keeping a steady, calm pace.",
    ],
    safetyTips: [
      "Don't puff your cheeks — keep your lips gently puckered.",
      "If you feel dizzy, stop and breathe normally.",
      "This is especially helpful during walks or climbing stairs.",
    ],
  },
  {
    id: BigInt(12),
    title: "4-7-8 Relaxing Breath",
    category: "Breathing",
    bodyPart: "Whole Body",
    difficulty: "Easy",
    repsOrDuration: "4 full breath cycles",
    description:
      "The 4-7-8 breathing technique is wonderfully relaxing. It slows your heart rate, quiets racing thoughts, and can even help you sleep better at night.",
    steps: [
      "Sit or lie down in a comfortable position.",
      "Close your eyes if that feels comfortable.",
      "Breathe in quietly through your nose for a count of 4.",
      "Hold your breath gently for a count of 7.",
      "Breathe out completely through your mouth for a count of 8.",
      "That is one cycle. Repeat 4 times in a row.",
    ],
    safetyTips: [
      "Do not do more than 4 cycles at a time at first.",
      "Skip the breath-hold if it causes any discomfort.",
      "Sit down for this one in case you feel very relaxed afterward.",
    ],
  },
];
