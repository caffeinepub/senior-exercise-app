import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Exercise = {
    id : Nat;
    title : Text;
    category : Text;
    bodyPart : Text;
    description : Text;
    steps : [Text];
    repsOrDuration : Text;
    safetyTips : [Text];
    difficulty : Text;
  };

  let exercises = Map.empty<Nat, Exercise>();

  func seedExercises() {
    let seededExercises : [Exercise] = [
      {
        id = 1;
        title = "Chair Squats";
        category = "Strength";
        bodyPart = "Legs";
        description = "Strengthens legs and glutes using a chair for support.";
        steps = [
          "Stand in front of a chair with feet hip-width apart.",
          "Lower your body to sit back into the chair.",
          "Stand back up from the seated position.",
        ];
        repsOrDuration = "10-15 repetitions";
        safetyTips = [
          "Use a stable chair.",
          "Avoid going too low if it causes discomfort.",
        ];
        difficulty = "Easy";
      },
      {
        id = 2;
        title = "Heel Raises";
        category = "Strength";
        bodyPart = "Calves";
        description = "Builds strength in the lower legs.";
        steps = [
          "Stand upright, holding onto a sturdy surface for balance.",
          "Slowly lift heels off the ground.",
          "Lower back down with control.",
        ];
        repsOrDuration = "15-20 repetitions";
        safetyTips = [
          "Hold onto a stable surface.",
          "Avoid leaning forward.",
        ];
        difficulty = "Easy";
      },
      {
        id = 3;
        title = "Shoulder Rolls";
        category = "Flexibility";
        bodyPart = "Shoulders";
        description = "Improves shoulder mobility and reduces tension.";
        steps = [
          "Stand or sit upright.",
          "Roll shoulders forward in circular motion.",
          "Reverse direction, rolling shoulders backward.",
        ];
        repsOrDuration = "10 repetitions each direction";
        safetyTips = [
          "Move slowly and avoid jerking motions.",
        ];
        difficulty = "Easy";
      },
      {
        id = 4;
        title = "Neck Stretches";
        category = "Flexibility";
        bodyPart = "Neck";
        description = "Increases neck flexibility and relieves tension.";
        steps = [
          "Tilt head to the right, holding briefly.",
          "Switch to left side, holding again.",
          "Slowly look down, stretching the back of the neck.",
        ];
        repsOrDuration = "Hold each stretch for 10-15 seconds";
        safetyTips = [
          "Move gently, avoiding extreme positions.",
        ];
        difficulty = "Easy";
      },
      {
        id = 5;
        title = "Single Leg Stands";
        category = "Balance";
        bodyPart = "Legs";
        description = "Improves balance and leg strength.";
        steps = [
          "Stand upright, holding onto a sturdy surface for support.",
          "Lift one foot off the ground and hold.",
          "Switch legs and repeat.",
        ];
        repsOrDuration = "Hold for 10-15 seconds each leg";
        safetyTips = [
          "Keep a slight bend in the knee.",
          "Hold onto a stable surface.",
        ];
        difficulty = "Moderate";
      },
      {
        id = 6;
        title = "Tandem Stance";
        category = "Balance";
        bodyPart = "Legs";
        description = "Improves balance by standing with one foot in front of the other.";
        steps = [
          "Stand with one foot directly in front of the other, heel to toe.",
          "Hold position briefly.",
          "Switch feet and repeat.",
        ];
        repsOrDuration = "Hold for 10-20 seconds each side";
        safetyTips = [
          "Keep a slight bend in knees.",
          "Hold onto a stable surface.",
        ];
        difficulty = "Moderate";
      },
      {
        id = 7;
        title = "Diaphragmatic Breathing";
        category = "Breathing";
        bodyPart = "Core";
        description = "Promotes relaxation and strong lung function.";
        steps = [
          "Sit or lie down comfortably.",
          "Place one hand on chest, other hand on stomach.",
          "Deeply inhale through nose, filling stomach with air.",
          "Exhale slowly through mouth.",
        ];
        repsOrDuration = "5-10 deep breaths";
        safetyTips = [
          "Avoid taking too many rapid breaths.",
        ];
        difficulty = "Easy";
      },
      {
        id = 8;
        title = "Pursed Lip Breathing";
        category = "Breathing";
        bodyPart = "Lungs";
        description = "Helps control breathing and improves oxygen flow.";
        steps = [
          "Inhale slowly through nose.",
          "Exhale gently with lips pursed, like blowing out a candle.",
        ];
        repsOrDuration = "5-10 breaths";
        safetyTips = [
          "Take slow, controlled breaths.",
        ];
        difficulty = "Easy";
      },
      {
        id = 9;
        title = "Wall Push-Ups";
        category = "Strength";
        bodyPart = "Chest";
        description = "Builds upper body strength using a wall for support.";
        steps = [
          "Stand facing a wall with arms extended.",
          "Lean toward the wall, pressing hands against it.",
          "Push off the wall to return to starting position.",
        ];
        repsOrDuration = "10-15 repetitions";
        safetyTips = [
          "Keep body straight during movement.",
          "Avoid leaning in too quickly.",
        ];
        difficulty = "Moderate";
      },
      {
        id = 10;
        title = "Ankle Circles";
        category = "Flexibility";
        bodyPart = "Ankles";
        description = "Increases mobility and strength in the ankles.";
        steps = [
          "Sit with legs extended.",
          "Rotate ankles in circular motion.",
          "Reverse direction and repeat.",
        ];
        repsOrDuration = "10 circles each direction";
        safetyTips = [
          "Move slowly, avoiding rapid movements.",
        ];
        difficulty = "Easy";
      },
      {
        id = 11;
        title = "Seated Marches";
        category = "Strength";
        bodyPart = "Legs";
        description = "Improves strength and mobility while seated.";
        steps = [
          "Sit upright in a chair.",
          "Lift one knee towards chest and lower back down.",
          "Repeat with other leg.",
        ];
        repsOrDuration = "15-20 repetitions per leg";
        safetyTips = [
          "Sit in a stable chair with feet flat on floor.",
        ];
        difficulty = "Easy";
      },
      {
        id = 12;
        title = "Back Stretch";
        category = "Flexibility";
        bodyPart = "Back";
        description = "Improves flexibility and reduces tension in the back.";
        steps = [
          "Stand with feet shoulder-width apart.",
          "Reach arms overhead and clasp hands together.",
          "Slowly bend to one side, holding briefly.",
        ];
        repsOrDuration = "Hold for 10-15 seconds each side";
        safetyTips = [
          "Move slowly, avoiding bouncing.",
        ];
        difficulty = "Easy";
      },
      {
        id = 13;
        title = "Finger & Wrist Stretches";
        category = "Flexibility";
        bodyPart = "Hands";
        description = "Increases mobility and reduces stiffness in hands and wrists.";
        steps = [
          "Extend arm out in front with palm facing down.",
          "Gently pull back on fingers with opposite hand.",
          "Switch to other hand and repeat.",
        ];
        repsOrDuration = "Hold each stretch for 10-15 seconds";
        safetyTips = [
          "Avoid excessive stretching.",
        ];
        difficulty = "Easy";
      },
      {
        id = 14;
        title = "Toe Taps";
        category = "Balance";
        bodyPart = "Legs";
        description = "Improves balance and coordination.";
        steps = [
          "Stand upright, holding onto a sturdy surface for support.",
          "Tap right foot in front, return to starting position.",
          "Repeat with left foot.",
        ];
        repsOrDuration = "10-15 repetitions per leg";
        safetyTips = [
          "Keep a slight bend in knees.",
          "Hold onto a stable surface.",
        ];
        difficulty = "Easy";
      },
      {
        id = 15;
        title = "Heel-to-Toe Walk";
        category = "Balance";
        bodyPart = "Legs";
        description = "Challenges balance by walking in a straight line.";
        steps = [
          "Stand with feet together.",
          "Walk forward, placing one foot directly in front of the other.",
        ];
        repsOrDuration = "10-15 steps";
        safetyTips = [
          "Keep a slight bend in knees.",
          "Hold onto a stable surface.",
        ];
        difficulty = "Moderate";
      },
      {
        id = 16;
        title = "Standing Quad Stretch";
        category = "Flexibility";
        bodyPart = "Thighs";
        description = "Improves flexibility in front thighs.";
        steps = [
          "Stand upright, holding onto a sturdy surface for balance.",
          "Bend right knee and bring foot toward glutes.",
          "Hold ankle with right hand, holding briefly.",
          "Switch to left leg and repeat.",
        ];
        repsOrDuration = "Hold for 10-15 seconds each side";
        safetyTips = [
          "Avoid pulling too hard on ankle.",
        ];
        difficulty = "Moderate";
      },
    ];

    for (exercise in seededExercises.values()) {
      exercises.add(exercise.id, exercise);
    };
  };

  seedExercises();

  public query func getAllExercises() : async [Exercise] {
    exercises.values().toArray();
  };

  public query func getExercisesByCategory(category : Text) : async [Exercise] {
    exercises.values().toArray().filter(func(exercise) { exercise.category == category });
  };

  public query func getExerciseById(id : Nat) : async Exercise {
    switch (exercises.get(id)) {
      case (null) { Runtime.trap("Exercise not found") };
      case (?exercise) { exercise };
    };
  };
};
