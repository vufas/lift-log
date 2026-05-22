const STORAGE_KEY = "liftLogState.v1";

const defaultConfig = {
  units: "lb",
  cycleOrder: ["Upper A", "Z2", "Lower A", "HIIT - Erg", "Upper B", "Jog", "Lower B"],
  schedule: {
    mode: "alternatingGroups",
    groupOrder: ["lift", "cardio"],
    groups: {
      lift: ["Upper A", "Lower A", "Upper B", "Lower B"],
      cardio: ["Z2", "HIIT - Erg", "Jog"]
    }
  },
  deload: {
    enabled: false,
    everyCycles: 4,
    targetReductionPercent: 15
  },
  workouts: [
    {
      name: "Lower A",
      exercises: [
        { name: "Mobility warmup", sets: 0, targetReps: "90/90 Hip Rotations - 30s/side; World's Greatest Stretch - 2 reps/side, slow; Ankle Dorsiflexion Rock-backs - 8-10 reps/side; Glute Bridge with Hold - 8-10 reps, 2s squeeze; Bodyweight Squat with Pause & Hip Opener - 5 reps", targetWeight: "", restSeconds: 0, trackProgress: false },
        { name: "RDL", sets: 3, targetReps: "8-10", targetWeight: "", restSeconds: 120 },
        { name: "Leg Press", sets: 3, targetReps: "8-12", targetWeight: "", restSeconds: 120 },
        { name: "Leg extension", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 },
        { name: "Hip abduction (open)", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 },
        { name: "Standing calf", sets: 3, targetReps: "12-20", targetWeight: "", restSeconds: 75 },
        { name: "Hanging leg raise", sets: 2, targetReps: "AMRAP (goal: 20 clean)", targetWeight: "", restSeconds: 60 },
        { name: "Pallof press", sets: 2, targetReps: "", targetWeight: "", restSeconds: 60 }
      ]
    },
    {
      name: "Upper A",
      exercises: [
        { name: "Mobility warmup", sets: 0, targetReps: "Scapular Wall Slides - 6-8 reps; Banded Shoulder Dislocates / PVC Pass-throughs - 8-10 reps; Thoracic Spine Open Books - 5 reps/side; Scapular Overhead Shrugs with light KB superset with Kelso shrugs, same weight; Banded Face Pulls - 12-15 reps", targetWeight: "", restSeconds: 0, trackProgress: false },
        { name: "Neutral pull-ups", sets: 3, targetReps: "6-10", targetWeight: "", restSeconds: 120 },
        { name: "Dips", sets: 3, targetReps: "8-12", targetWeight: "", restSeconds: 120 },
        { name: "Cable row", sets: 2, targetReps: "8-10", targetWeight: "", restSeconds: 90 },
        {
          name: "Shoulder variant",
          alternate: "perWorkout",
          variants: [
            { name: "OHP", sets: 2, targetReps: "8-12", targetWeight: "", restSeconds: 90 },
            { name: "Lu lateral raise", sets: 2, targetReps: "8-12", targetWeight: "", restSeconds: 90 }
          ]
        },
        { name: "Reverse preacher curl", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 },
        { name: "Cable external rotation", sets: 1, targetReps: "15-20", targetWeight: "", restSeconds: 60 }
      ]
    },
    {
      name: "Lower B",
      exercises: [
        { name: "Mobility warmup", sets: 0, targetReps: "Dynamic Hamstring Sweep Stretch - 5 reps/side; Hip Airplanes - 3-4 reps/side; Cossack Squat Side Shifts - 6 reps total; Cat-Cow into Neutral Spine Holds - 30s flow; Good Morning with PVC / Empty Bar - 6-8 reps", targetWeight: "", restSeconds: 0, trackProgress: false },
        { name: "BSS", sets: 2, targetReps: "8-10", targetWeight: "", restSeconds: 90 },
        { name: "PJR Pullover", sets: 2, targetReps: "10-12", targetWeight: "", restSeconds: 90 },
        { name: "Seated calf", sets: 3, targetReps: "", targetWeight: "", restSeconds: 75 },
        {
          name: "KB swing variant",
          alternate: "perWorkout",
          variants: [
            { name: "Two-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75 },
            { name: "One-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75 }
          ]
        },
        { name: "Dragon Flag", sets: 2, targetReps: "AMRAP", targetWeight: "", restSeconds: 60 },
        { name: "Seated Leg Curl", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 },
        { name: "Hip adduction (close)", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 }
      ]
    },
    {
      name: "Upper B",
      exercises: [
        { name: "Mobility warmup", sets: 0, targetReps: "Foam Roller T-spine Extensions - 5 reps; Banded Lat Stretch - 20s hold/side; Arm Circles - 8 reps each direction; Serratus Wall Slide / Lift-off - 6-8 reps; Band Pull-aparts - 12-15 reps", targetWeight: "", restSeconds: 0, trackProgress: false },
        { name: "Chin-ups", sets: 3, targetReps: "6-10", targetWeight: "", restSeconds: 120 },
        { name: "30 deg DB incline press", sets: 3, targetReps: "8-12", targetWeight: "", restSeconds: 120 },
        { name: "Chest fly", sets: 2, targetReps: "8-10", targetWeight: "", restSeconds: 90 },
        { name: "Face pulls", sets: 2, targetReps: "12-15", targetWeight: "", restSeconds: 75 },
        { name: "Incline Y-raise", sets: 1, targetReps: "8-12", targetWeight: "", restSeconds: 60 },
        {
          name: "Carry variant",
          alternate: "perWorkout",
          variants: [
            { name: "Weighted farmer's carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90 },
            { name: "Suitcase carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90 }
          ]
        }
      ]
    },
    {
      name: "HIIT - Erg",
      exercises: [
        { name: "Warmup: Easy 50-60% effort", sets: 1, targetReps: "5m", targetWeight: "", restSeconds: 0 },
        { name: "Norwegian 4x4", sets: 1, targetReps: "28m", targetWeight: "", restSeconds: 0 },
        { name: "Zone 2 (60-70% HR max)", sets: 1, targetReps: "15m", targetWeight: "", restSeconds: 0 }
      ]
    },
    {
      name: "Z2",
      exercises: [
        { name: "Z2 Cardio", sets: 1, targetReps: "60-75m", targetWeight: "", restSeconds: 0 }
      ]
    },
    {
      name: "Jog",
      exercises: [
        { name: "5K jog - 3x8-12 min tempo intervals with 2 min breaks. Z3-low 4", sets: 1, targetReps: "25-30m", targetWeight: "", restSeconds: 0 },
        { name: "Easy Z2 jog", sets: 1, targetReps: "30m", targetWeight: "", restSeconds: 0 }
      ]
    }
  ]
};

const state = loadState();
let timer = {
  intervalId: null,
  startedAt: 0,
  endsAt: 0,
  totalSeconds: 0,
  label: ""
};

const dom = {};

document.addEventListener("DOMContentLoaded", () => {
  bindDom();
  bindEvents();
  renderAll();
  registerServiceWorker();
});

function bindDom() {
  Object.assign(dom, {
    screenTitle: document.querySelector("#screenTitle"),
    nextWorkoutName: document.querySelector("#nextWorkoutName"),
    workoutPicker: document.querySelector("#workoutPicker"),
    startWorkoutBtn: document.querySelector("#startWorkoutBtn"),
    resumeWorkoutBtn: document.querySelector("#resumeWorkoutBtn"),
    activeSession: document.querySelector("#activeSession"),
    historyList: document.querySelector("#historyList"),
    configEditor: document.querySelector("#configEditor"),
    saveConfigBtn: document.querySelector("#saveConfigBtn"),
    configStatus: document.querySelector("#configStatus"),
    exportBtn: document.querySelector("#exportBtn"),
    importInput: document.querySelector("#importInput"),
    clearHistoryBtn: document.querySelector("#clearHistoryBtn"),
    unitSelect: document.querySelector("#unitSelect"),
    deloadEnabled: document.querySelector("#deloadEnabled"),
    deloadEvery: document.querySelector("#deloadEvery"),
    deloadReduction: document.querySelector("#deloadReduction"),
    timerDisplay: document.querySelector("#timerDisplay"),
    timerProgress: document.querySelector("#timerProgress"),
    timerMessage: document.querySelector("#timerMessage"),
    timerStopBtn: document.querySelector("#timerStopBtn")
  });
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => showView(tab.dataset.view));
  });

  dom.workoutPicker.addEventListener("change", () => {
    state.selectedWorkoutName = dom.workoutPicker.value;
    persist();
    renderToday();
  });

  dom.startWorkoutBtn.addEventListener("click", () => {
    startSession(dom.workoutPicker.value);
  });

  dom.resumeWorkoutBtn.addEventListener("click", () => {
    showView("todayView");
    renderActiveSession();
  });

  dom.saveConfigBtn.addEventListener("click", saveConfigFromEditor);
  dom.exportBtn.addEventListener("click", exportBackup);
  dom.importInput.addEventListener("change", importBackup);
  dom.clearHistoryBtn.addEventListener("click", clearHistory);
  dom.timerStopBtn.addEventListener("click", stopTimer);

  dom.unitSelect.addEventListener("change", () => {
    state.config.units = dom.unitSelect.value;
    persist();
    renderActiveSession();
  });

  dom.deloadEnabled.addEventListener("change", () => updateDeloadSettings());
  dom.deloadEvery.addEventListener("change", () => updateDeloadSettings());
  dom.deloadReduction.addEventListener("change", () => updateDeloadSettings());
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      version: 1,
      config: structuredClone(defaultConfig),
      history: [],
      activeSession: null,
      selectedWorkoutName: defaultConfig.cycleOrder[0]
    };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      version: 1,
      config: normalizeConfig(parsed.config || defaultConfig),
      history: Array.isArray(parsed.history) ? parsed.history : [],
      activeSession: parsed.activeSession || null,
      selectedWorkoutName: parsed.selectedWorkoutName || getNextWorkoutName(parsed)
    };
  } catch {
    return {
      version: 1,
      config: structuredClone(defaultConfig),
      history: [],
      activeSession: null,
      selectedWorkoutName: defaultConfig.cycleOrder[0]
    };
  }
}

function normalizeConfig(config) {
  if (shouldUseUpdatedDefaultConfig(config)) {
    config = defaultConfig;
  }
  config = migrateExerciseVariants(config);

  const merged = {
    ...structuredClone(defaultConfig),
    ...config,
    schedule: {
      ...structuredClone(defaultConfig.schedule),
      ...(config.schedule || {}),
      groups: {
        ...structuredClone(defaultConfig.schedule.groups),
        ...((config.schedule && config.schedule.groups) || {})
      }
    },
    deload: { ...defaultConfig.deload, ...(config.deload || {}) }
  };

  merged.workouts = Array.isArray(config.workouts) ? config.workouts : defaultConfig.workouts;
  merged.cycleOrder = Array.isArray(config.cycleOrder) && config.cycleOrder.length
    ? config.cycleOrder
    : merged.workouts.map((workout) => workout.name);
  merged.units = config.units || "lb";
  return merged;
}

function shouldUseUpdatedDefaultConfig(config) {
  if (config.schedule) return false;
  return Array.isArray(config.workouts) && config.workouts.some((workout) =>
    Array.isArray(workout.exercises) && workout.exercises.some((exercise) =>
      ["Press movement", "Squat movement", "Zone 3 cardio", "Intervals"].includes(exercise.name)
    )
  );
}

function migrateExerciseVariants(config) {
  const migrated = structuredClone(config);
  if (!Array.isArray(migrated.workouts)) return migrated;

  const replacements = new Map([
    [
      "OHP alt Lu lateral raise",
      {
        name: "Shoulder variant",
        alternate: "perWorkout",
        variants: [
          { name: "OHP", sets: 2, targetReps: "8-12", targetWeight: "", restSeconds: 90 },
          { name: "Lu lateral raise", sets: 2, targetReps: "8-12", targetWeight: "", restSeconds: 90 }
        ]
      }
    ],
    [
      "KB swings (half 1-handed)",
      {
        name: "KB swing variant",
        alternate: "perWorkout",
        variants: [
          { name: "Two-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75 },
          { name: "One-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75 }
        ]
      }
    ],
    [
      "Weighted farmer's OR suitcase carry (alternating)",
      {
        name: "Carry variant",
        alternate: "perWorkout",
        variants: [
          { name: "Weighted farmer's carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90 },
          { name: "Suitcase carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90 }
        ]
      }
    ]
  ]);

  migrated.workouts = migrated.workouts.map((workout) => ({
    ...workout,
    exercises: Array.isArray(workout.exercises)
      ? workout.exercises.map((exercise) => replacements.get(exercise.name) || exercise)
      : []
  }));
  return migrated;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderAll() {
  renderToday();
  renderActiveSession();
  renderHistory();
  renderConfigEditor();
  renderSettings();
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewId));

  const titles = {
    todayView: "Today",
    historyView: "History",
    routineView: "Routines",
    settingsView: "Settings"
  };
  dom.screenTitle.textContent = titles[viewId] || "Lift Log";
}

function renderToday() {
  const workouts = state.config.workouts;
  const nextName = getNextWorkoutName(state);
  const selected = state.selectedWorkoutName || nextName;

  dom.workoutPicker.innerHTML = "";
  workouts.forEach((workout) => {
    const option = document.createElement("option");
    option.value = workout.name;
    option.textContent = workout.name;
    dom.workoutPicker.append(option);
  });

  if (workouts.some((workout) => workout.name === selected)) {
    dom.workoutPicker.value = selected;
  } else {
    dom.workoutPicker.value = nextName;
    state.selectedWorkoutName = nextName;
    persist();
  }

  dom.nextWorkoutName.textContent = dom.workoutPicker.value;
  dom.resumeWorkoutBtn.classList.toggle("hidden", !state.activeSession);
}

function getNextWorkoutName(sourceState) {
  const config = sourceState.config || defaultConfig;
  const scheduled = getNextScheduledWorkoutName(sourceState);
  if (scheduled) return scheduled;

  const cycleOrder = config.cycleOrder || defaultConfig.cycleOrder;
  const history = Array.isArray(sourceState.history) ? sourceState.history : [];
  const lastWorkoutName = history[0]?.workoutName;
  if (!lastWorkoutName) return cycleOrder[0];

  const index = cycleOrder.indexOf(lastWorkoutName);
  if (index < 0) return cycleOrder[0];
  return cycleOrder[(index + 1) % cycleOrder.length];
}

function getNextScheduledWorkoutName(sourceState) {
  const config = sourceState.config || defaultConfig;
  const schedule = config.schedule;
  if (!schedule || schedule.mode !== "alternatingGroups") return "";

  const groupOrder = Array.isArray(schedule.groupOrder) && schedule.groupOrder.length
    ? schedule.groupOrder
    : [];
  const groups = schedule.groups || {};
  if (!groupOrder.length) return "";

  const history = Array.isArray(sourceState.history) ? sourceState.history : [];
  const lastGroup = getWorkoutGroup(history[0]?.workoutName, schedule);
  const nextGroup = lastGroup
    ? groupOrder[(groupOrder.indexOf(lastGroup) + 1) % groupOrder.length]
    : groupOrder[0];
  const candidates = groups[nextGroup] || [];
  if (!candidates.length) return "";

  return getLeastRecentlyCompletedWorkout(candidates, history);
}

function getWorkoutGroup(workoutName, schedule = state.config.schedule) {
  if (!workoutName || !schedule?.groups) return "";
  return Object.entries(schedule.groups).find(([, names]) => names.includes(workoutName))?.[0] || "";
}

function getLeastRecentlyCompletedWorkout(candidates, history) {
  const lastSeen = new Map(candidates.map((name) => [name, 0]));
  history.forEach((session) => {
    if (lastSeen.has(session.workoutName) && lastSeen.get(session.workoutName) === 0) {
      lastSeen.set(session.workoutName, new Date(session.completedAt || session.startedAt || 0).getTime() || 1);
    }
  });

  return candidates
    .map((name, index) => ({ name, index, seenAt: lastSeen.get(name) || 0 }))
    .sort((a, b) => a.seenAt - b.seenAt || a.index - b.index)[0].name;
}

function getCycleStatusText() {
  const schedule = state.config.schedule;
  if (schedule?.mode === "alternatingGroups") {
    const liftNames = schedule.groups?.lift || [];
    const cardioNames = schedule.groups?.cardio || [];
    const liftCount = countCompletedWorkouts(liftNames);
    const cardioCount = countCompletedWorkouts(cardioNames);
    const liftCycle = Math.floor(liftCount / Math.max(1, liftNames.length)) + 1;
    const cardioCycle = Math.floor(cardioCount / Math.max(1, cardioNames.length)) + 1;
    return `Lift cycle ${liftCycle}, cardio cycle ${cardioCycle}`;
  }

  const orderLength = Math.max(1, state.config.cycleOrder.length);
  const completed = state.history.length;
  const cycle = Math.floor(completed / orderLength) + 1;
  const day = (completed % orderLength) + 1;
  return `Cycle ${cycle}, day ${day}`;
}

function getLastCompletedText() {
  const latest = state.history[0];
  if (!latest) return "No workouts logged yet";
  return `Last: ${latest.workoutName} on ${formatDate(latest.completedAt)}`;
}

function getDeloadSuggestion() {
  const deload = state.config.deload;
  if (!deload?.enabled) return "";
  const liftNames = state.config.schedule?.groups?.lift || [];
  const completedLiftWorkouts = liftNames.length ? countCompletedWorkouts(liftNames) : state.history.length;
  const cycleSize = liftNames.length || state.config.cycleOrder.length || 1;
  const nextCycle = Math.floor(completedLiftWorkouts / Math.max(1, cycleSize)) + 1;
  if (nextCycle > 1 && nextCycle % Number(deload.everyCycles || 4) === 0) {
    return `deload reminder: reduce load ${deload.targetReductionPercent}%`;
  }
  return "";
}

function countCompletedWorkouts(names) {
  return state.history.filter((session) => names.includes(session.workoutName)).length;
}

function startSession(workoutName) {
  const workout = state.config.workouts.find((item) => item.name === workoutName);
  if (!workout) return;

  state.activeSession = {
    id: createId(),
    workoutName: workout.name,
    startedAt: new Date().toISOString(),
    units: state.config.units,
    notes: workout.notes || "",
    exercises: workout.exercises.map((exercise) => createSessionExercise(workout.name, exercise))
  };

  persist();
  renderToday();
  renderActiveSession();
}

function createSessionExercise(workoutName, exercise) {
  const resolvedExercise = resolveExerciseVariant(workoutName, exercise);
  return {
    id: createId(),
    name: resolvedExercise.name,
    sourceName: exercise.name,
    variantName: resolvedExercise.variantName || "",
    targetReps: resolvedExercise.targetReps || "",
    targetWeight: resolvedExercise.targetWeight || "",
    restSeconds: Number(resolvedExercise.restSeconds || 0),
    trackProgress: resolvedExercise.trackProgress !== false,
    skipped: false,
    sets: resolvedExercise.trackProgress === false ? [] : Array.from({ length: Number(resolvedExercise.sets || 1) }, () => ({
      reps: "",
      weight: resolvedExercise.targetWeight || "",
      effort: ""
    }))
  };
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
  }

  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function resolveExerciseVariant(workoutName, exercise) {
  if (!Array.isArray(exercise.variants) || !exercise.variants.length) return exercise;

  const completedCount = state.history.filter((session) => session.workoutName === workoutName).length;
  const index = completedCount % exercise.variants.length;
  const variant = exercise.variants[index];
  return {
    ...exercise,
    ...variant,
    sourceName: exercise.name,
    variantName: variant.name
  };
}

function renderActiveSession() {
  if (!state.activeSession) {
    dom.activeSession.classList.add("hidden");
    dom.activeSession.innerHTML = "";
    return;
  }

  const session = state.activeSession;
  dom.activeSession.classList.remove("hidden");
  dom.activeSession.innerHTML = "";

  const summary = document.createElement("div");
  summary.className = "session-summary";
  summary.innerHTML = `
    <div>
      <p class="section-label">Active session</p>
      <h2>${escapeHtml(session.workoutName)}</h2>
      <p class="muted">${escapeHtml(session.notes || "Started " + formatDateTime(session.startedAt))}</p>
    </div>
    <div class="session-actions">
      <button class="secondary-button" type="button" data-action="cancel-session">Cancel</button>
      <button class="primary-button" type="button" data-action="finish-session">Finish</button>
    </div>
  `;
  dom.activeSession.append(summary);

  const list = document.createElement("div");
  list.className = "exercise-list";
  session.exercises.forEach((exercise, exerciseIndex) => {
    list.append(renderExercise(exercise, exerciseIndex));
  });
  dom.activeSession.append(list);

  dom.activeSession.querySelector('[data-action="finish-session"]').addEventListener("click", finishSession);
  dom.activeSession.querySelector('[data-action="cancel-session"]').addEventListener("click", cancelSession);
}

function renderExercise(exercise, exerciseIndex) {
  const template = document.querySelector("#exerciseTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.toggle("skipped", Boolean(exercise.skipped));
  node.querySelector("h3").textContent = exercise.name;
  node.querySelector(".exercise-target").textContent = getExerciseTargetText(exercise);

  const previousLog = renderPreviousExerciseLog(exercise);
  if (previousLog) {
    node.querySelector(".exercise-head").after(previousLog);
  }

  node.querySelector(".skip-exercise").addEventListener("click", () => {
    exercise.skipped = !exercise.skipped;
    persist();
    renderActiveSession();
  });

  const editPanel = node.querySelector(".exercise-edit");
  node.querySelector(".edit-exercise").addEventListener("click", () => {
    editPanel.classList.toggle("hidden");
  });
  renderExerciseEditor(editPanel, exercise, exerciseIndex);

  const sets = node.querySelector(".sets");
  if (exercise.trackProgress === false) {
    const noTrack = document.createElement("p");
    noTrack.className = "muted tight";
    noTrack.textContent = "Do this warmup without logging sets.";
    sets.append(noTrack);
  } else {
    exercise.sets.forEach((set, setIndex) => {
      sets.append(renderSetRow(exercise, exerciseIndex, set, setIndex));
    });
  }
  return node;
}

function getExerciseTargetText(exercise) {
  if (exercise.trackProgress === false) {
    return exercise.targetReps ? `Warmup · ${exercise.targetReps}` : "Warmup · do not track progress";
  }

  const pieces = [];
  pieces.push(`${exercise.sets.length} set${exercise.sets.length === 1 ? "" : "s"}`);
  if (exercise.targetReps) pieces.push(exercise.targetReps);
  if (exercise.targetWeight) pieces.push(`${exercise.targetWeight} ${state.config.units}`);
  if (exercise.restSeconds) pieces.push(`${formatDuration(exercise.restSeconds)} rest`);
  if (exercise.skipped) pieces.push("skipped");
  return pieces.join(" · ");
}

function renderPreviousExerciseLog(exercise) {
  if (exercise.trackProgress === false || !state.activeSession) return null;

  const previous = findPreviousExerciseLog(exercise);
  const previousSession = previous?.session;
  const previousExercise = previous?.exercise;
  if (!previousSession || !previousExercise) return null;

  const completedSets = previousExercise.sets.filter(isSetComplete);
  if (!completedSets.length) return null;

  const container = document.createElement("div");
  container.className = "previous-log";

  const title = document.createElement("p");
  title.className = "previous-log-title";
  title.textContent = `Last time · ${formatDate(previousSession.completedAt || previousSession.startedAt)}`;
  container.append(title);

  const list = document.createElement("div");
  list.className = "previous-set-list";
  completedSets.forEach((set, index) => {
    const item = document.createElement("span");
    item.textContent = `${index + 1}: ${formatSetSummary(set, previousSession.units || state.config.units)}`;
    list.append(item);
  });
  container.append(list);
  return container;
}

function findPreviousExerciseLog(exercise) {
  for (const session of state.history) {
    if (session.workoutName !== state.activeSession.workoutName) continue;

    const previousExercise = session.exercises?.find((item) => item.name === exercise.name);
    if (previousExercise?.sets?.some(isSetComplete)) {
      return { session, exercise: previousExercise };
    }
  }
  return null;
}

function formatSetSummary(set, units) {
  const parts = [];
  if (set.weight) parts.push(`${set.weight} ${units}`);
  if (set.reps) parts.push(`${set.reps} reps`);
  if (set.effort) parts.push(set.effort);
  return parts.join(" · ");
}

function renderExerciseEditor(container, exercise, exerciseIndex) {
  container.innerHTML = `
    <label>Name <input data-field="name" value="${escapeAttr(exercise.name)}"></label>
    <label>Sets <input data-field="sets" type="number" min="1" max="12" step="1" value="${exercise.sets.length}"></label>
    <label>Target reps <input data-field="targetReps" value="${escapeAttr(exercise.targetReps)}"></label>
    <label>Target ${state.config.units} <input data-field="targetWeight" value="${escapeAttr(exercise.targetWeight)}"></label>
    <label>Rest seconds <input data-field="restSeconds" type="number" min="0" max="900" step="15" value="${exercise.restSeconds}"></label>
  `;

  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const field = input.dataset.field;
      if (field === "sets") {
        resizeSets(exercise, Number(input.value || 1));
      } else if (field === "restSeconds") {
        exercise.restSeconds = Number(input.value || 0);
      } else {
        exercise[field] = input.value;
      }
      state.activeSession.exercises[exerciseIndex] = exercise;
      persist();
      renderActiveSession();
    });
  });
}

function resizeSets(exercise, desiredCount) {
  const count = Math.max(1, Math.min(12, desiredCount));
  while (exercise.sets.length < count) {
    exercise.sets.push({ reps: "", weight: exercise.targetWeight || "", effort: "" });
  }
  exercise.sets = exercise.sets.slice(0, count);
}

function renderSetRow(exercise, exerciseIndex, set, setIndex) {
  const row = document.createElement("div");
  row.className = "set-row";
  row.classList.toggle("complete", isSetComplete(set));
  row.innerHTML = `
    <span class="set-number">${setIndex + 1}</span>
    <input inputmode="decimal" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} weight" placeholder="${state.config.units}" value="${escapeAttr(set.weight)}">
    <input inputmode="numeric" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} reps" placeholder="reps" value="${escapeAttr(set.reps)}">
    <select aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} effort">
      <option value="">Expected</option>
      <option value="easy">Easy</option>
      <option value="hard">Hard</option>
      <option value="failed">Failed</option>
    </select>
  `;

  const [weightInput, repsInput] = row.querySelectorAll("input");
  const effortSelect = row.querySelector("select");
  effortSelect.value = set.effort || "";

  weightInput.addEventListener("change", () => updateSet(exerciseIndex, setIndex, "weight", weightInput.value));
  repsInput.addEventListener("change", () => updateSet(exerciseIndex, setIndex, "reps", repsInput.value, true));
  effortSelect.addEventListener("change", () => updateSet(exerciseIndex, setIndex, "effort", effortSelect.value));
  return row;
}

function updateSet(exerciseIndex, setIndex, field, value, maybeStartRest = false) {
  const exercise = state.activeSession.exercises[exerciseIndex];
  const set = exercise.sets[setIndex];
  const wasComplete = isSetComplete(set);
  set[field] = value;
  const isNowComplete = isSetComplete(set);
  persist();
  renderActiveSession();

  if (maybeStartRest && !wasComplete && isNowComplete && hasMoreSets(exercise, setIndex) && exercise.restSeconds > 0) {
    startTimer(exercise.restSeconds, `${exercise.name}: set ${setIndex + 2}`);
  }
}

function isSetComplete(set) {
  return String(set.reps || "").trim() !== "" || String(set.effort || "").trim() !== "";
}

function hasMoreSets(exercise, setIndex) {
  return exercise.sets.slice(setIndex + 1).some((next) => !isSetComplete(next));
}

function finishSession() {
  if (!state.activeSession) return;
  const completed = {
    ...structuredClone(state.activeSession),
    completedAt: new Date().toISOString()
  };
  state.history.unshift(completed);
  state.activeSession = null;
  state.selectedWorkoutName = getNextWorkoutName(state);
  stopTimer();
  persist();
  renderAll();
}

function cancelSession() {
  if (!state.activeSession) return;
  const ok = window.confirm("Cancel this active workout? Logged history will stay unchanged.");
  if (!ok) return;
  state.activeSession = null;
  stopTimer();
  persist();
  renderAll();
}

function startTimer(seconds, label) {
  stopTimer(false);
  timer = {
    intervalId: null,
    startedAt: Date.now(),
    endsAt: Date.now() + seconds * 1000,
    totalSeconds: seconds,
    label
  };
  timer.intervalId = window.setInterval(tickTimer, 250);
  tickTimer();
}

function tickTimer() {
  const remainingMs = Math.max(0, timer.endsAt - Date.now());
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  dom.timerDisplay.textContent = formatClock(remainingSeconds);
  dom.timerMessage.textContent = remainingSeconds > 0 ? `Next: ${timer.label}` : "Rest complete. Start the next set.";
  const elapsed = timer.totalSeconds ? 1 - remainingSeconds / timer.totalSeconds : 1;
  dom.timerProgress.style.width = `${Math.min(100, Math.max(0, elapsed * 100))}%`;

  if (remainingSeconds <= 0) {
    window.clearInterval(timer.intervalId);
    timer.intervalId = null;
    vibrate();
  }
}

function stopTimer(resetMessage = true) {
  if (timer.intervalId) window.clearInterval(timer.intervalId);
  timer = { intervalId: null, startedAt: 0, endsAt: 0, totalSeconds: 0, label: "" };
  dom.timerDisplay.textContent = "00:00";
  dom.timerProgress.style.width = "0%";
  if (resetMessage) dom.timerMessage.textContent = "Timer starts after a set when more sets remain.";
}

function vibrate() {
  if ("vibrate" in navigator) {
    navigator.vibrate([160, 80, 160]);
  }
}

function renderHistory() {
  dom.historyList.innerHTML = "";
  if (!state.history.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No completed workouts yet.";
    dom.historyList.append(empty);
    return;
  }

  state.history.forEach((session) => {
    const item = document.createElement("article");
    item.className = "history-item";
    item.innerHTML = `
      <h3>${escapeHtml(session.workoutName)}</h3>
      <p>${formatDateTime(session.completedAt)} · ${summarizeSession(session)}</p>
      ${renderHistoryDetails(session)}
    `;
    dom.historyList.append(item);
  });
}

function renderHistoryDetails(session) {
  const exercises = session.exercises
    .map((exercise) => {
      if (exercise.skipped) {
        return `<li><strong>${escapeHtml(exercise.name)}</strong>: skipped</li>`;
      }

      const sets = exercise.sets
        .filter(isSetComplete)
        .map((set, index) => {
          const parts = [];
          if (set.weight) parts.push(`${escapeHtml(set.weight)} ${escapeHtml(state.config.units)}`);
          if (set.reps) parts.push(`${escapeHtml(set.reps)} reps`);
          if (set.effort) parts.push(escapeHtml(set.effort));
          return `<span>${index + 1}: ${parts.join(", ")}</span>`;
        })
        .join("");

      return `<li><strong>${escapeHtml(exercise.name)}</strong><div>${sets || "<span>No sets logged</span>"}</div></li>`;
    })
    .join("");

  return `<details class="history-details"><summary>Details</summary><ul>${exercises}</ul></details>`;
}

function summarizeSession(session) {
  const sets = session.exercises
    .filter((exercise) => !exercise.skipped)
    .reduce((total, exercise) => total + exercise.sets.filter(isSetComplete).length, 0);
  const skipped = session.exercises.filter((exercise) => exercise.skipped).length;
  return `${sets} logged set${sets === 1 ? "" : "s"}${skipped ? ` · ${skipped} skipped` : ""}`;
}

function renderConfigEditor() {
  dom.configEditor.value = JSON.stringify(state.config, null, 2);
}

function saveConfigFromEditor() {
  try {
    const parsed = JSON.parse(dom.configEditor.value);
    state.config = normalizeConfig(parsed);
    state.selectedWorkoutName = state.config.cycleOrder.includes(state.selectedWorkoutName)
      ? state.selectedWorkoutName
      : state.config.cycleOrder[0];
    persist();
    renderAll();
    dom.configStatus.textContent = "Saved.";
  } catch (error) {
    dom.configStatus.textContent = `Could not save: ${error.message}`;
  }
}

function renderSettings() {
  dom.unitSelect.value = state.config.units;
  dom.deloadEnabled.checked = Boolean(state.config.deload.enabled);
  dom.deloadEvery.value = state.config.deload.everyCycles;
  dom.deloadReduction.value = state.config.deload.targetReductionPercent;
}

function updateDeloadSettings() {
  state.config.deload = {
    enabled: dom.deloadEnabled.checked,
    everyCycles: Number(dom.deloadEvery.value || 4),
    targetReductionPercent: Number(dom.deloadReduction.value || 15)
  };
  persist();
  renderToday();
  renderConfigEditor();
}

function exportBackup() {
  const backup = {
    exportedAt: new Date().toISOString(),
    app: "Lift Log",
    state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `lift-log-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const importedState = parsed.state || parsed;
      state.version = 1;
      state.config = normalizeConfig(importedState.config || defaultConfig);
      state.history = Array.isArray(importedState.history) ? importedState.history : [];
      state.activeSession = importedState.activeSession || null;
      state.selectedWorkoutName = importedState.selectedWorkoutName || getNextWorkoutName(state);
      persist();
      renderAll();
      window.alert("Backup imported.");
    } catch (error) {
      window.alert(`Could not import backup: ${error.message}`);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function clearHistory() {
  const ok = window.confirm("Clear completed workout history? Active workout and routines will stay unchanged.");
  if (!ok) return;
  state.history = [];
  persist();
  renderAll();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function formatDate(iso) {
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(iso));
}

function formatDateTime(iso) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(iso));
}

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
}

function formatClock(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
