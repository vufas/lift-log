const STORAGE_KEY = "liftLogState.v1";

const defaultConfig = {
  units: "lb",
  cycleOrder: ["Upper A", "Z2", "Lower A", "HIIT - Erg", "Upper B", "Light HIIT and Z2", "Lower B"],
  schedule: {
    mode: "alternatingGroups",
    groupOrder: ["lift", "cardio"],
    groups: {
      lift: ["Upper A", "Lower A", "Upper B", "Lower B"],
      cardio: ["Z2", "HIIT - Erg", "Light HIIT and Z2"]
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
        { name: "Pallof press", sets: 2, targetReps: "", targetWeight: "", restSeconds: 60, isUnilateral: true }
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
        { name: "Cable external rotation", sets: 1, targetReps: "15-20", targetWeight: "", restSeconds: 60, isUnilateral: true }
      ]
    },
    {
      name: "Lower B",
      exercises: [
        { name: "Mobility warmup", sets: 0, targetReps: "Dynamic Hamstring Sweep Stretch - 5 reps/side; Hip Airplanes - 3-4 reps/side; Cossack Squat Side Shifts - 6 reps total; Cat-Cow into Neutral Spine Holds - 30s flow; Good Morning with PVC / Empty Bar - 6-8 reps", targetWeight: "", restSeconds: 0, trackProgress: false },
        { name: "BSS", sets: 2, targetReps: "8-10", targetWeight: "", restSeconds: 90, isUnilateral: true },
        { name: "PJR Pullover", sets: 2, targetReps: "10-12", targetWeight: "", restSeconds: 90 },
        { name: "Seated calf", sets: 3, targetReps: "", targetWeight: "", restSeconds: 75 },
        {
          name: "KB swing variant",
          alternate: "perWorkout",
          variants: [
            { name: "Two-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75 },
            { name: "One-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75, isUnilateral: true }
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
            { name: "Suitcase carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90, isUnilateral: true }
          ]
        }
      ]
    },
    {
      name: "HIIT - Erg",
      exercises: [
        { name: "Warmup", type: "cardio", targetModality: "Erg", targetHrZone: "50-60% HR max", targetMinutes: "5" },
        { name: "Norwegian 4x4", type: "cardio", targetModality: "Erg", targetHrZone: "Z4", targetMinutes: "16" },
        { name: "Zone 2", type: "cardio", targetModality: "Erg", targetHrZone: "Z2", targetMinutes: "15" }
      ]
    },
    {
      name: "Z2",
      exercises: [
        { name: "Z2 Cardio", type: "cardio", targetModality: "", targetHrZone: "Z2", targetMinutes: "60-75" }
      ]
    },
    {
      name: "Light HIIT and Z2",
      exercises: [
        { name: "Light HIIT", type: "cardio", targetModality: "", targetHrZone: "Z3-low Z4", targetMinutes: "25-30" },
        { name: "Zone 2", type: "cardio", targetModality: "", targetHrZone: "Z2", targetMinutes: "30" }
      ]
    }
  ]
};

const state = loadState();
let routineDraft = null;
let selectedRoutineWorkoutName = "";
let configJsonDirty = false;
let timer = {
  intervalId: null,
  startedAt: 0,
  endsAt: 0,
  totalSeconds: 0,
  label: "",
  exerciseId: "",
  nextSetIndex: -1
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
    currentWorkoutCard: document.querySelector("#currentWorkoutCard"),
    backupReminder: document.querySelector("#backupReminder"),
    workoutPicker: document.querySelector("#workoutPicker"),
    startWorkoutBtn: document.querySelector("#startWorkoutBtn"),
    resumeWorkoutBtn: document.querySelector("#resumeWorkoutBtn"),
    activeSession: document.querySelector("#activeSession"),
    historyList: document.querySelector("#historyList"),
    routineWorkoutPicker: document.querySelector("#routineWorkoutPicker"),
    routineEditor: document.querySelector("#routineEditor"),
    addWorkoutBtn: document.querySelector("#addWorkoutBtn"),
    advancedConfig: document.querySelector("#advancedConfig"),
    configEditor: document.querySelector("#configEditor"),
    saveConfigBtn: document.querySelector("#saveConfigBtn"),
    configStatus: document.querySelector("#configStatus"),
    exportBtn: document.querySelector("#exportBtn"),
    settingsExportBtn: document.querySelector("#settingsExportBtn"),
    backupStatus: document.querySelector("#backupStatus"),
    importInput: document.querySelector("#importInput"),
    clearHistoryBtn: document.querySelector("#clearHistoryBtn"),
    unitSelect: document.querySelector("#unitSelect"),
    deloadEnabled: document.querySelector("#deloadEnabled"),
    deloadEvery: document.querySelector("#deloadEvery"),
    deloadReduction: document.querySelector("#deloadReduction"),
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
  dom.routineWorkoutPicker.addEventListener("change", () => {
    selectedRoutineWorkoutName = dom.routineWorkoutPicker.value;
    renderRoutineEditor();
  });
  dom.addWorkoutBtn.addEventListener("click", addRoutineWorkout);
  dom.configEditor.addEventListener("input", () => {
    configJsonDirty = true;
    setRoutineFormDisabled(true);
    dom.configStatus.textContent = "Advanced JSON has unsaved changes. Save or reload the page before using the form.";
  });
  dom.advancedConfig.addEventListener("toggle", () => {
    if (dom.advancedConfig.open && !configJsonDirty) renderConfigEditor();
  });
  dom.exportBtn.addEventListener("click", exportBackup);
  dom.settingsExportBtn.addEventListener("click", exportBackup);
  dom.importInput.addEventListener("change", importBackup);
  dom.clearHistoryBtn.addEventListener("click", clearHistory);
  dom.unitSelect.addEventListener("change", () => {
    state.config.units = dom.unitSelect.value;
    if (routineDraft) routineDraft.units = dom.unitSelect.value;
    persist();
    renderActiveSession();
    renderConfigEditor();
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
      selectedWorkoutName: defaultConfig.cycleOrder[0],
      lastBackupExportedAt: "",
      backupReminderDismissedAt: ""
    };
  }

  try {
    const parsed = JSON.parse(raw);
    const config = normalizeConfig(parsed.config || defaultConfig);
    const history = Array.isArray(parsed.history) ? parsed.history.map(migrateSessionWorkoutName) : [];
    return {
      version: 1,
      config,
      history,
      activeSession: parsed.activeSession ? migrateSessionWorkoutName(parsed.activeSession) : null,
      selectedWorkoutName: renameWorkout(parsed.selectedWorkoutName) || getNextWorkoutName({ ...parsed, config, history }),
      lastBackupExportedAt: parsed.lastBackupExportedAt || "",
      backupReminderDismissedAt: parsed.backupReminderDismissedAt || ""
    };
  } catch {
    return {
      version: 1,
      config: structuredClone(defaultConfig),
      history: [],
      activeSession: null,
      selectedWorkoutName: defaultConfig.cycleOrder[0],
      lastBackupExportedAt: "",
      backupReminderDismissedAt: ""
    };
  }
}

function normalizeConfig(config) {
  if (shouldUseUpdatedDefaultConfig(config)) {
    config = defaultConfig;
  }
  config = migrateExerciseVariants(config);
  config = migrateUnilateralFields(config);
  config = migrateCardioWorkouts(config);

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

function migrateCardioWorkouts(config) {
  const migrated = structuredClone(config);
  if (!Array.isArray(migrated.workouts)) return migrated;

  migrated.cycleOrder = Array.isArray(migrated.cycleOrder)
    ? migrated.cycleOrder.map(renameWorkout)
    : migrated.cycleOrder;

  if (migrated.schedule?.groups) {
    migrated.schedule.groups = Object.fromEntries(
      Object.entries(migrated.schedule.groups).map(([group, names]) => [
        group,
        Array.isArray(names) ? names.map(renameWorkout) : names
      ])
    );
  }

  const cardioNames = new Set(migrated.schedule?.groups?.cardio || ["Z2", "HIIT - Erg", "Light HIIT and Z2"]);
  migrated.workouts = migrated.workouts.map((workout) => {
    const name = renameWorkout(workout.name);
    if (!cardioNames.has(name)) return { ...workout, name };

    return {
      ...workout,
      name,
      exercises: Array.isArray(workout.exercises)
        ? workout.exercises.map((exercise) => migrateCardioExercise(name, exercise))
        : []
    };
  });

  return migrated;
}

function renameWorkout(name) {
  return name === "Jog" ? "Light HIIT and Z2" : name;
}

function migrateCardioExercise(workoutName, exercise) {
  if (exercise?.type === "cardio") {
    return {
      ...exercise,
      name: migrateCardioExerciseName(workoutName, exercise.name)
    };
  }

  const {
    sets,
    targetReps,
    targetWeight,
    restSeconds,
    isUnilateral,
    unilateral,
    ...rest
  } = exercise || {};
  const text = `${exercise?.name || ""} ${targetReps || ""}`;

  return {
    ...rest,
    name: migrateCardioExerciseName(workoutName, exercise?.name),
    type: "cardio",
    targetModality: inferCardioModality(workoutName, text),
    targetHrZone: inferHrZone(text),
    targetMinutes: inferTargetMinutes(text, targetReps)
  };
}

function migrateCardioExerciseName(workoutName, name) {
  if (workoutName !== "Light HIIT and Z2") return name || "Cardio";
  if (/5k jog|tempo intervals/i.test(name || "")) return "Light HIIT";
  if (/easy z2 jog/i.test(name || "")) return "Zone 2";
  return name || "Cardio";
}

function inferCardioModality(workoutName, text) {
  if (/erg/i.test(workoutName)) return "Erg";
  if (/jog|run/i.test(text)) return "Running";
  return "";
}

function inferHrZone(text) {
  if (/50\s*-\s*60%/i.test(text)) return "50-60% HR max";
  if (/norwegian|4x4/i.test(text)) return "Z4";
  if (/z3|zone 3|tempo/i.test(text)) return "Z3-low Z4";
  if (/\bz2\b|zone 2|60\s*-\s*70%/i.test(text)) return "Z2";
  return "";
}

function inferTargetMinutes(text, targetReps) {
  if (/norwegian|4x4/i.test(text)) return "16";
  return String(targetReps || "").replace(/\s*m(?:in(?:utes?)?)?\s*$/i, "");
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
          { name: "One-handed KB swings", sets: 2, targetReps: "15-20", targetWeight: "", restSeconds: 75, isUnilateral: true }
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
          { name: "Suitcase carry", sets: 2, targetReps: "50m+", targetWeight: "", restSeconds: 90, isUnilateral: true }
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

function migrateUnilateralFields(config) {
  const migrated = structuredClone(config);
  if (!Array.isArray(migrated.workouts)) return migrated;

  migrated.workouts = migrated.workouts.map((workout) => ({
    ...workout,
    exercises: Array.isArray(workout.exercises) ? workout.exercises.map(migrateExerciseUnilateralField) : []
  }));
  return migrated;
}

function migrateExerciseUnilateralField(exercise) {
  const migrated = migrateSingleExerciseUnilateralField(exercise);
  if (migrated && typeof migrated === "object" && Array.isArray(migrated.variants)) {
    migrated.variants = migrated.variants.map(migrateSingleExerciseUnilateralField);
  }
  return migrated;
}

function migrateSingleExerciseUnilateralField(exercise) {
  if (!exercise || typeof exercise !== "object") return exercise;
  const shouldTrackSides = ["Cable external rotation", "Pallof press"].includes(exercise.name);
  if (!Object.hasOwn(exercise, "unilateral")) {
    return shouldTrackSides ? { ...exercise, isUnilateral: true } : exercise;
  }

  const { unilateral, ...rest } = exercise;
  return {
    ...rest,
    isUnilateral: shouldTrackSides || Boolean(rest.isUnilateral ?? unilateral)
  };
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderAll() {
  renderToday();
  renderActiveSession();
  renderHistory();
  renderRoutineEditor();
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
  dom.currentWorkoutCard.classList.toggle("hidden", Boolean(state.activeSession));

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
  renderBackupReminder();
}

function renderBackupReminder() {
  if (!shouldShowBackupReminder()) {
    dom.backupReminder.classList.add("hidden");
    dom.backupReminder.innerHTML = "";
    return;
  }

  const latest = state.history[0];
  dom.backupReminder.classList.remove("hidden");
  dom.backupReminder.innerHTML = `
    <div>
      <p class="section-label">Backup</p>
      <h2>Workout not backed up</h2>
      <p class="muted">Latest: ${escapeHtml(latest.workoutName)} on ${escapeHtml(formatDateTime(latest.completedAt || latest.startedAt))}</p>
    </div>
    <div class="session-actions">
      <button class="secondary-button" type="button" data-action="dismiss-backup">Later</button>
      <button class="primary-button" type="button" data-action="backup-now">Backup now</button>
    </div>
  `;
  dom.backupReminder.querySelector('[data-action="backup-now"]').addEventListener("click", exportBackup);
  dom.backupReminder.querySelector('[data-action="dismiss-backup"]').addEventListener("click", () => {
    state.backupReminderDismissedAt = latest.completedAt;
    persist();
    renderBackupReminder();
  });
}

function shouldShowBackupReminder() {
  if (state.activeSession || !state.history.length) return false;
  const latestCompletedAt = state.history[0]?.completedAt || state.history[0]?.startedAt || "";
  if (!latestCompletedAt) return false;
  return isAfter(latestCompletedAt, state.lastBackupExportedAt) && isAfter(latestCompletedAt, state.backupReminderDismissedAt);
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
  if (resolvedExercise.type === "cardio") {
    return {
      id: createId(),
      name: resolvedExercise.name,
      sourceName: exercise.name,
      type: "cardio",
      targetModality: resolvedExercise.targetModality || "",
      targetHrZone: resolvedExercise.targetHrZone || "",
      targetMinutes: resolvedExercise.targetMinutes || "",
      modality: resolvedExercise.targetModality || "",
      hrZone: resolvedExercise.targetHrZone || "",
      minutesInZone: "",
      notes: "",
      skipped: false
    };
  }

  return {
    id: createId(),
    name: resolvedExercise.name,
    sourceName: exercise.name,
    variantName: resolvedExercise.variantName || "",
    targetReps: resolvedExercise.targetReps || "",
    targetWeight: resolvedExercise.targetWeight || "",
    restSeconds: Number(resolvedExercise.restSeconds || 0),
    trackProgress: resolvedExercise.trackProgress !== false,
    isUnilateral: isExerciseUnilateral(resolvedExercise),
    skipped: false,
    sets: resolvedExercise.trackProgress === false ? [] : Array.from({ length: Number(resolvedExercise.sets || 1) }, () => createEmptySet(resolvedExercise))
  };
}

function migrateSessionWorkoutName(session) {
  return {
    ...session,
    workoutName: renameWorkout(session.workoutName)
  };
}

function createEmptySet(exercise) {
  const base = {
    reps: "",
    weight: exercise.targetWeight || "",
    effort: "",
    notes: ""
  };

  if (!isExerciseUnilateral(exercise)) return base;
  return {
    ...base,
    leftWeight: exercise.targetWeight || "",
    leftReps: "",
    rightWeight: exercise.targetWeight || "",
    rightReps: ""
  };
}

function isExerciseUnilateral(exercise) {
  if (typeof exercise?.isUnilateral === "boolean") return exercise.isUnilateral;
  if (typeof exercise?.unilateral === "boolean") return exercise.unilateral;
  return looksUnilateral(exercise?.name);
}

function looksUnilateral(name) {
  return /\b(bss|split squat|single[- ]?leg|one[- ]?handed|one[- ]?arm|suitcase|per side|\/side)\b/i.test(name || "");
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
  if (exercise.type === "cardio") {
    return renderCardioExercise(exercise, exerciseIndex);
  }

  exercise.isUnilateral = isExerciseUnilateral(exercise);
  const template = document.querySelector("#exerciseTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.toggle("skipped", Boolean(exercise.skipped));
  node.querySelector("h3").textContent = exercise.name;
  node.querySelector(".exercise-target").textContent = getExerciseTargetText(exercise);

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
    const timerNode = renderExerciseTimer(exercise);
    if (timerNode) sets.append(timerNode);

    const previous = findPreviousExerciseLog(exercise);
    exercise.sets.forEach((set, setIndex) => {
      sets.append(renderSetRow(exercise, exerciseIndex, set, setIndex, previous?.exercise?.sets?.[setIndex]));
    });
  }
  return node;
}

function renderCardioExercise(exercise, exerciseIndex) {
  const template = document.querySelector("#exerciseTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.toggle("skipped", Boolean(exercise.skipped));
  node.querySelector("h3").textContent = exercise.name;
  node.querySelector(".exercise-target").textContent = getExerciseTargetText(exercise);

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

  const fields = document.createElement("div");
  fields.className = "cardio-fields";
  fields.innerHTML = `
    <label>
      <span>Modality</span>
      <input data-field="modality" value="${escapeAttr(exercise.modality || "")}" placeholder="Bike, rower, run...">
    </label>
    <label>
      <span>HR zone</span>
      <input data-field="hrZone" value="${escapeAttr(exercise.hrZone || "")}" placeholder="Z2">
    </label>
    <label>
      <span>Minutes in zone</span>
      <input data-field="minutesInZone" type="number" min="0" step="1" inputmode="decimal" value="${escapeAttr(exercise.minutesInZone || "")}" placeholder="${escapeAttr(exercise.targetMinutes || "Minutes")}">
    </label>
    <label class="cardio-notes">
      <span>Notes</span>
      <textarea data-field="notes" placeholder="Optional notes">${escapeHtml(exercise.notes || "")}</textarea>
    </label>
  `;

  fields.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("change", () => {
      exercise[input.dataset.field] = input.value;
      state.activeSession.exercises[exerciseIndex] = exercise;
      persist();
      renderActiveSession();
    });
  });
  node.querySelector(".sets").append(fields);
  return node;
}

function renderExerciseTimer(exercise) {
  if (!timer.totalSeconds || timer.exerciseId !== exercise.id) return null;

  const remainingSeconds = getTimerRemainingSeconds();
  const panel = document.createElement("div");
  panel.className = "exercise-timer";
  panel.innerHTML = `
    <div class="exercise-timer-head">
      <div>
        <p class="section-label">Rest timer</p>
        <h4 data-timer-display>${formatClock(remainingSeconds)}</h4>
      </div>
      <button class="icon-button subtle" type="button" aria-label="Stop timer" title="Stop timer">
        <span aria-hidden="true">■</span>
      </button>
    </div>
    <div class="timer-bar" aria-hidden="true"><span data-timer-progress></span></div>
    <p class="muted" data-timer-message>${escapeHtml(getTimerMessage(remainingSeconds))}</p>
  `;
  panel.querySelector("button").addEventListener("click", () => {
    stopTimer();
    renderActiveSession();
  });
  return panel;
}

function getExerciseTargetText(exercise) {
  if (exercise.type === "cardio") {
    const pieces = [];
    if (exercise.targetModality) pieces.push(exercise.targetModality);
    if (exercise.targetHrZone) pieces.push(exercise.targetHrZone);
    if (exercise.targetMinutes) pieces.push(`${exercise.targetMinutes} min in zone`);
    if (exercise.skipped) pieces.push("skipped");
    return pieces.join(" · ") || "Track modality and time in HR zone";
  }

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
  if (set.leftWeight || set.leftReps || set.rightWeight || set.rightReps) {
    parts.push(`L ${formatSideSummary(set.leftWeight, set.leftReps, units)}`);
    parts.push(`R ${formatSideSummary(set.rightWeight, set.rightReps, units)}`);
  } else {
    if (set.weight) parts.push(`${set.weight} ${units}`);
    if (set.reps) parts.push(`${set.reps} reps`);
  }
  if (set.effort) parts.push(set.effort);
  if (set.notes) parts.push(set.notes);
  return parts.join(" · ");
}

function formatSideSummary(weight, reps, units) {
  const parts = [];
  if (weight) parts.push(`${weight} ${units}`);
  if (reps) parts.push(`${reps} reps`);
  return parts.join(", ") || "-";
}

function renderExerciseEditor(container, exercise, exerciseIndex) {
  if (exercise.type === "cardio") {
    container.innerHTML = `
      <label>Name <input data-field="name" value="${escapeAttr(exercise.name)}"></label>
      <label>Target modality <input data-field="targetModality" value="${escapeAttr(exercise.targetModality || "")}"></label>
      <label>Target HR zone <input data-field="targetHrZone" value="${escapeAttr(exercise.targetHrZone || "")}"></label>
      <label>Target minutes <input data-field="targetMinutes" value="${escapeAttr(exercise.targetMinutes || "")}"></label>
    `;
  } else {
    container.innerHTML = `
      <label>Name <input data-field="name" value="${escapeAttr(exercise.name)}"></label>
      <label>Sets <input data-field="sets" type="number" min="1" max="12" step="1" value="${exercise.sets.length}"></label>
      <label>Target reps <input data-field="targetReps" value="${escapeAttr(exercise.targetReps)}"></label>
      <label>Target ${state.config.units} <input data-field="targetWeight" value="${escapeAttr(exercise.targetWeight)}"></label>
      <label>Rest seconds <input data-field="restSeconds" type="number" min="0" max="900" step="15" value="${exercise.restSeconds}"></label>
    `;
  }

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
    exercise.sets.push(createEmptySet(exercise));
  }
  exercise.sets = exercise.sets.slice(0, count);
}

function renderSetRow(exercise, exerciseIndex, set, setIndex, previousSet) {
  const row = document.createElement("div");
  row.className = exercise.isUnilateral ? "set-row unilateral" : "set-row";
  row.classList.toggle("complete", isSetComplete(set));

  if (exercise.isUnilateral) {
    row.innerHTML = `
      <span class="set-number">${setIndex + 1}</span>
      <div class="side-fields" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} left side">
        <span>Left</span>
        <input data-field="leftWeight" inputmode="decimal" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} left weight" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "leftWeight", state.config.units))}" value="${escapeAttr(set.leftWeight || "")}">
        <input data-field="leftReps" inputmode="numeric" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} left reps" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "leftReps", "reps"))}" value="${escapeAttr(set.leftReps || "")}">
      </div>
      <div class="side-fields" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} right side">
        <span>Right</span>
        <input data-field="rightWeight" inputmode="decimal" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} right weight" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "rightWeight", state.config.units))}" value="${escapeAttr(set.rightWeight || "")}">
        <input data-field="rightReps" inputmode="numeric" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} right reps" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "rightReps", "reps"))}" value="${escapeAttr(set.rightReps || "")}">
      </div>
      ${renderSetTail(exercise, set, setIndex, previousSet)}
    `;

    bindSetField(row, "leftWeight", exerciseIndex, setIndex);
    bindSetField(row, "leftReps", exerciseIndex, setIndex, true);
    bindSetField(row, "rightWeight", exerciseIndex, setIndex);
    bindSetField(row, "rightReps", exerciseIndex, setIndex, true);
  } else {
    row.innerHTML = `
      <span class="set-number">${setIndex + 1}</span>
      <input data-field="weight" inputmode="decimal" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} weight" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "weight", state.config.units))}" value="${escapeAttr(set.weight || "")}">
      <input data-field="reps" inputmode="numeric" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} reps" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "reps", "reps"))}" value="${escapeAttr(set.reps || "")}">
      ${renderSetTail(exercise, set, setIndex, previousSet)}
    `;

    bindSetField(row, "weight", exerciseIndex, setIndex);
    bindSetField(row, "reps", exerciseIndex, setIndex, true);
  }

  bindSetField(row, "notes", exerciseIndex, setIndex);
  const effortSelect = row.querySelector("select");
  effortSelect.value = set.effort || "";
  effortSelect.addEventListener("change", () => updateSet(exerciseIndex, setIndex, "effort", effortSelect.value));
  return row;
}

function renderSetTail(exercise, set, setIndex, previousSet) {
  return `
    <textarea data-field="notes" aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} notes" placeholder="${escapeAttr(getLastPlaceholder(previousSet, "notes", "notes"))}">${escapeHtml(set.notes || "")}</textarea>
    <select aria-label="${escapeAttr(exercise.name)} set ${setIndex + 1} effort">
      <option value="">Expected</option>
      <option value="easy">Easy</option>
      <option value="hard">Hard</option>
      <option value="failed">Failed</option>
    </select>
  `;
}

function bindSetField(row, field, exerciseIndex, setIndex, maybeStartRest = false) {
  const input = row.querySelector(`[data-field="${field}"]`);
  if (!input) return;
  input.addEventListener("change", () => updateSet(exerciseIndex, setIndex, field, input.value, maybeStartRest));
}

function getLastPlaceholder(previousSet, field, fallback) {
  const value = previousSet?.[field] || getLegacyPreviousValue(previousSet, field);
  return value ? `Last: ${value}${field.toLowerCase().includes("weight") ? ` ${state.config.units}` : ""}` : fallback;
}

function getLegacyPreviousValue(previousSet, field) {
  if (!previousSet) return "";
  if (field === "leftWeight" || field === "rightWeight") return previousSet.weight || "";
  if (field === "leftReps" || field === "rightReps") return previousSet.reps || "";
  return "";
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
    startTimer(exercise.restSeconds, `${exercise.name}: set ${setIndex + 2}`, exercise.id, setIndex + 1);
  }
}

function isSetComplete(set) {
  const hasEffortOrNotes = [set.effort, set.notes].some((value) => String(value || "").trim() !== "");
  if ("leftReps" in set || "rightReps" in set) {
    return hasEffortOrNotes || (String(set.leftReps || "").trim() !== "" && String(set.rightReps || "").trim() !== "");
  }
  return hasEffortOrNotes || String(set.reps || "").trim() !== "";
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

function startTimer(seconds, label, exerciseId, nextSetIndex) {
  stopTimer(false);
  timer = {
    intervalId: null,
    startedAt: Date.now(),
    endsAt: Date.now() + seconds * 1000,
    totalSeconds: seconds,
    label,
    exerciseId,
    nextSetIndex
  };
  timer.intervalId = window.setInterval(tickTimer, 250);
  renderActiveSession();
  tickTimer();
}

function tickTimer() {
  const remainingSeconds = getTimerRemainingSeconds();
  updateTimerDom(remainingSeconds);

  if (remainingSeconds <= 0) {
    window.clearInterval(timer.intervalId);
    timer.intervalId = null;
    vibrate();
  }
}

function getTimerRemainingSeconds() {
  if (!timer.endsAt) return 0;
  return Math.ceil(Math.max(0, timer.endsAt - Date.now()) / 1000);
}

function getTimerMessage(remainingSeconds) {
  return remainingSeconds > 0 ? `Next: ${timer.label}` : "Rest complete. Start the next set.";
}

function updateTimerDom(remainingSeconds = getTimerRemainingSeconds()) {
  const timerPanel = document.querySelector(".exercise-timer");
  if (!timerPanel) return;

  const display = timerPanel.querySelector("[data-timer-display]");
  const message = timerPanel.querySelector("[data-timer-message]");
  const progress = timerPanel.querySelector("[data-timer-progress]");
  if (display) display.textContent = formatClock(remainingSeconds);
  if (message) message.textContent = getTimerMessage(remainingSeconds);
  const elapsed = timer.totalSeconds ? 1 - remainingSeconds / timer.totalSeconds : 1;
  if (progress) progress.style.width = `${Math.min(100, Math.max(0, elapsed * 100))}%`;
}

function stopTimer(resetMessage = true) {
  if (timer.intervalId) window.clearInterval(timer.intervalId);
  timer = { intervalId: null, startedAt: 0, endsAt: 0, totalSeconds: 0, label: "", exerciseId: "", nextSetIndex: -1 };
  if (resetMessage) {
    document.querySelector(".exercise-timer")?.remove();
  }
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

      if (exercise.type === "cardio") {
        const summary = formatCardioSummary(exercise);
        return `<li><strong>${escapeHtml(exercise.name)}</strong><div><span>${escapeHtml(summary || "No cardio time logged")}</span></div></li>`;
      }

      const sets = exercise.sets
        .filter(isSetComplete)
        .map((set, index) => {
          return `<span>${index + 1}: ${escapeHtml(formatSetSummary(set, session.units || state.config.units))}</span>`;
        })
        .join("");

      return `<li><strong>${escapeHtml(exercise.name)}</strong><div>${sets || "<span>No sets logged</span>"}</div></li>`;
    })
    .join("");

  return `<details class="history-details"><summary>Details</summary><ul>${exercises}</ul></details>`;
}

function summarizeSession(session) {
  const cardioExercises = session.exercises.filter((exercise) => exercise.type === "cardio" && !exercise.skipped);
  const loggedCardio = cardioExercises.filter(isCardioComplete);
  if (cardioExercises.length) {
    const totalMinutes = loggedCardio.reduce((total, exercise) => total + Number(exercise.minutesInZone || 0), 0);
    const skipped = session.exercises.filter((exercise) => exercise.skipped).length;
    const time = totalMinutes ? `${totalMinutes} min in HR zone` : `${loggedCardio.length} cardio segment${loggedCardio.length === 1 ? "" : "s"}`;
    return `${time}${skipped ? ` · ${skipped} skipped` : ""}`;
  }

  const sets = session.exercises
    .filter((exercise) => !exercise.skipped)
    .reduce((total, exercise) => total + exercise.sets.filter(isSetComplete).length, 0);
  const skipped = session.exercises.filter((exercise) => exercise.skipped).length;
  return `${sets} logged set${sets === 1 ? "" : "s"}${skipped ? ` · ${skipped} skipped` : ""}`;
}

function isCardioComplete(exercise) {
  return [exercise.minutesInZone, exercise.notes]
    .some((value) => String(value || "").trim() !== "");
}

function formatCardioSummary(exercise) {
  const parts = [];
  if (exercise.modality) parts.push(exercise.modality);
  if (exercise.hrZone) parts.push(exercise.hrZone);
  if (exercise.minutesInZone) parts.push(`${exercise.minutesInZone} min in zone`);
  if (exercise.notes) parts.push(exercise.notes);
  return parts.join(" · ");
}

function getRoutineDraft() {
  if (!routineDraft) routineDraft = structuredClone(state.config);
  return routineDraft;
}

function renderRoutineEditor() {
  const draft = getRoutineDraft();
  const selectedWorkout = getSelectedRoutineWorkout();
  dom.routineEditor.innerHTML = "";
  dom.routineWorkoutPicker.innerHTML = "";
  draft.workouts.forEach((workout) => {
    const option = document.createElement("option");
    option.value = workout.name;
    option.textContent = workout.name;
    dom.routineWorkoutPicker.append(option);
  });
  dom.routineWorkoutPicker.value = selectedWorkout.name;

  const workoutIndex = draft.workouts.indexOf(selectedWorkout);
  const workout = selectedWorkout;
  const card = document.createElement("article");
  card.className = "routine-workout";
  card.innerHTML = `
    <div class="routine-workout-head">
      <label class="routine-name">
        <span>Workout name</span>
        <input value="${escapeAttr(workout.name)}" aria-label="Workout name">
      </label>
      <label>
        <span>Group</span>
        <select aria-label="${escapeAttr(workout.name)} schedule group">
          <option value="">Other</option>
          <option value="lift">Strength</option>
          <option value="cardio">Cardio</option>
        </select>
      </label>
    </div>
    <label class="routine-notes">
      <span>Workout notes</span>
      <input value="${escapeAttr(workout.notes || "")}" placeholder="Optional">
    </label>
    <div class="routine-exercises"></div>
    <div class="routine-actions">
      <button class="secondary-button" type="button" data-action="add-exercise">Add exercise</button>
      <button class="danger-button" type="button" data-action="remove-workout" ${draft.workouts.length === 1 ? "disabled" : ""}>Remove workout</button>
    </div>
  `;

  const nameInput = card.querySelector(".routine-name input");
  nameInput.addEventListener("change", () => renameRoutineWorkout(workoutIndex, nameInput.value));

  const groupSelect = card.querySelector(".routine-workout-head select");
  groupSelect.value = getDraftWorkoutGroup(workout.name);
  groupSelect.addEventListener("change", () => {
    setDraftWorkoutGroup(workout.name, groupSelect.value);
    markRoutineDraftChanged();
  });

  const notesInput = card.querySelector(".routine-notes input");
  notesInput.addEventListener("change", () => {
    workout.notes = notesInput.value;
    markRoutineDraftChanged();
  });

  const exerciseList = card.querySelector(".routine-exercises");
  workout.exercises.forEach((exercise, exerciseIndex) => {
    exerciseList.append(renderRoutineExercise(workout, workoutIndex, exercise, exerciseIndex));
  });

  card.querySelector('[data-action="add-exercise"]').addEventListener("click", () => {
    const group = getDraftWorkoutGroup(workout.name);
    workout.exercises.push(group === "cardio"
      ? { name: "New cardio segment", type: "cardio", targetModality: "", targetHrZone: "", targetMinutes: "" }
      : { name: "New exercise", sets: 3, targetReps: "", targetWeight: "", restSeconds: 90 });
    markRoutineDraftChanged(true);
  });

  card.querySelector('[data-action="remove-workout"]').addEventListener("click", () => {
    if (!window.confirm(`Remove ${workout.name}?`)) return;
    removeRoutineWorkout(workoutIndex);
  });
  dom.routineEditor.append(card);
  setRoutineFormDisabled(configJsonDirty);
}

function getSelectedRoutineWorkout() {
  const draft = getRoutineDraft();
  const preferredName = selectedRoutineWorkoutName || state.selectedWorkoutName;
  const workout = draft.workouts.find((item) => item.name === preferredName) || draft.workouts[0];
  selectedRoutineWorkoutName = workout.name;
  return workout;
}

function renderRoutineExercise(workout, workoutIndex, exercise, exerciseIndex) {
  const card = document.createElement("div");
  card.className = "routine-exercise";

  if (Array.isArray(exercise.variants)) {
    card.innerHTML = `
      <div class="routine-exercise-head">
        <label>
          <span>Alternating exercise</span>
          <input value="${escapeAttr(exercise.name)}">
        </label>
        <span class="routine-badge">Alternates each workout</span>
      </div>
      <div class="routine-variants"></div>
      <div class="routine-item-actions">
        ${renderMoveButtons(exerciseIndex, workout.exercises.length)}
        <button class="danger-button compact-action" type="button" data-action="remove">Remove</button>
      </div>
    `;
    const nameInput = card.querySelector(".routine-exercise-head input");
    nameInput.addEventListener("change", () => {
      exercise.name = nameInput.value;
      markRoutineDraftChanged();
    });
    const variants = card.querySelector(".routine-variants");
    exercise.variants.forEach((variant, variantIndex) => {
      const panel = document.createElement("div");
      panel.className = "routine-variant";
      panel.innerHTML = `<p class="section-label">Option ${variantIndex + 1}</p>`;
      panel.append(renderRoutineExerciseFields(variant));
      variants.append(panel);
    });
  } else {
    card.append(renderRoutineExerciseFields(exercise));
    const actions = document.createElement("div");
    actions.className = "routine-item-actions";
    actions.innerHTML = `
      ${renderMoveButtons(exerciseIndex, workout.exercises.length)}
      <button class="danger-button compact-action" type="button" data-action="remove">Remove</button>
    `;
    card.append(actions);
  }

  bindRoutineItemActions(card, workoutIndex, exerciseIndex);
  return card;
}

function renderRoutineExerciseFields(exercise) {
  const fields = document.createElement("div");
  fields.className = "routine-exercise-fields";
  const type = getRoutineExerciseType(exercise);
  fields.innerHTML = `
    <label class="routine-exercise-name">
      <span>Exercise</span>
      <input data-field="name" value="${escapeAttr(exercise.name || "")}">
    </label>
    <label>
      <span>Tracking</span>
      <select data-field="type">
        <option value="strength">Sets and reps</option>
        <option value="cardio">Cardio time</option>
        <option value="warmup">Do not track</option>
      </select>
    </label>
    ${type === "cardio" ? `
      <label><span>Target modality</span><input data-field="targetModality" value="${escapeAttr(exercise.targetModality || "")}" placeholder="Bike, run, row..."></label>
      <label><span>Target HR zone</span><input data-field="targetHrZone" value="${escapeAttr(exercise.targetHrZone || "")}" placeholder="Z2"></label>
      <label><span>Target minutes</span><input data-field="targetMinutes" value="${escapeAttr(exercise.targetMinutes || "")}" inputmode="decimal"></label>
    ` : `
      <label><span>${type === "warmup" ? "Instructions" : "Target reps"}</span><input data-field="targetReps" value="${escapeAttr(exercise.targetReps || "")}"></label>
      ${type === "strength" ? `
        <label><span>Sets</span><input data-field="sets" type="number" min="1" max="12" value="${Number(exercise.sets || 1)}"></label>
        <label><span>Target weight</span><input data-field="targetWeight" value="${escapeAttr(exercise.targetWeight || "")}" inputmode="decimal"></label>
        <label><span>Rest seconds</span><input data-field="restSeconds" type="number" min="0" max="900" step="15" value="${Number(exercise.restSeconds || 0)}"></label>
        <label class="routine-checkbox"><input data-field="isUnilateral" type="checkbox" ${isExerciseUnilateral(exercise) ? "checked" : ""}><span>Track left and right separately</span></label>
      ` : ""}
    `}
  `;

  fields.querySelector('[data-field="type"]').value = type;
  fields.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", () => {
      const field = input.dataset.field;
      if (field === "type") {
        replaceRoutineExerciseType(exercise, input.value);
        markRoutineDraftChanged(true);
        return;
      }
      if (input.type === "checkbox") {
        exercise[field] = input.checked;
      } else if (["sets", "restSeconds"].includes(field)) {
        exercise[field] = Number(input.value || 0);
      } else {
        exercise[field] = input.value;
      }
      markRoutineDraftChanged();
    });
  });
  return fields;
}

function getRoutineExerciseType(exercise) {
  if (exercise.type === "cardio") return "cardio";
  if (exercise.trackProgress === false) return "warmup";
  return "strength";
}

function replaceRoutineExerciseType(exercise, type) {
  const name = exercise.name || "New exercise";
  Object.keys(exercise).forEach((key) => delete exercise[key]);
  if (type === "cardio") {
    Object.assign(exercise, { name, type: "cardio", targetModality: "", targetHrZone: "", targetMinutes: "" });
  } else if (type === "warmup") {
    Object.assign(exercise, { name, sets: 0, targetReps: "", targetWeight: "", restSeconds: 0, trackProgress: false });
  } else {
    Object.assign(exercise, { name, sets: 3, targetReps: "", targetWeight: "", restSeconds: 90 });
  }
}

function renderMoveButtons(index, length) {
  return `
    <button class="secondary-button compact-action" type="button" data-action="up" ${index === 0 ? "disabled" : ""} aria-label="Move exercise up">Up</button>
    <button class="secondary-button compact-action" type="button" data-action="down" ${index === length - 1 ? "disabled" : ""} aria-label="Move exercise down">Down</button>
  `;
}

function bindRoutineItemActions(card, workoutIndex, exerciseIndex) {
  card.querySelector('[data-action="up"]')?.addEventListener("click", () => moveRoutineExercise(workoutIndex, exerciseIndex, -1));
  card.querySelector('[data-action="down"]')?.addEventListener("click", () => moveRoutineExercise(workoutIndex, exerciseIndex, 1));
  card.querySelector('[data-action="remove"]')?.addEventListener("click", () => {
    getRoutineDraft().workouts[workoutIndex].exercises.splice(exerciseIndex, 1);
    markRoutineDraftChanged(true);
  });
}

function moveRoutineExercise(workoutIndex, exerciseIndex, offset) {
  const exercises = getRoutineDraft().workouts[workoutIndex].exercises;
  const destination = exerciseIndex + offset;
  if (destination < 0 || destination >= exercises.length) return;
  [exercises[exerciseIndex], exercises[destination]] = [exercises[destination], exercises[exerciseIndex]];
  markRoutineDraftChanged(true);
}

function addRoutineWorkout() {
  const draft = getRoutineDraft();
  let number = draft.workouts.length + 1;
  let name = `Workout ${number}`;
  while (draft.workouts.some((workout) => workout.name === name)) {
    number += 1;
    name = `Workout ${number}`;
  }
  draft.workouts.push({ name, exercises: [] });
  draft.cycleOrder.push(name);
  selectedRoutineWorkoutName = name;
  markRoutineDraftChanged(true);
}

function removeRoutineWorkout(workoutIndex) {
  const draft = getRoutineDraft();
  if (draft.workouts.length <= 1) {
    dom.configStatus.textContent = "At least one workout is required.";
    return;
  }
  const [removed] = draft.workouts.splice(workoutIndex, 1);
  draft.cycleOrder = draft.cycleOrder.filter((name) => name !== removed.name);
  Object.values(draft.schedule.groups).forEach((names) => {
    const index = names.indexOf(removed.name);
    if (index !== -1) names.splice(index, 1);
  });
  selectedRoutineWorkoutName = draft.workouts[Math.min(workoutIndex, draft.workouts.length - 1)].name;
  markRoutineDraftChanged(true);
}

function renameRoutineWorkout(workoutIndex, requestedName) {
  const draft = getRoutineDraft();
  const workout = draft.workouts[workoutIndex];
  const oldName = workout.name;
  const name = requestedName.trim();
  if (!name || draft.workouts.some((item, index) => index !== workoutIndex && item.name === name)) {
    dom.configStatus.textContent = "Workout names must be unique and cannot be blank.";
    renderRoutineEditor();
    return;
  }
  workout.name = name;
  if (selectedRoutineWorkoutName === oldName) selectedRoutineWorkoutName = name;
  draft.cycleOrder = draft.cycleOrder.map((item) => item === oldName ? name : item);
  Object.values(draft.schedule.groups).forEach((names) => {
    const index = names.indexOf(oldName);
    if (index !== -1) names[index] = name;
  });
  markRoutineDraftChanged(true);
}

function getDraftWorkoutGroup(workoutName) {
  const groups = getRoutineDraft().schedule?.groups || {};
  return Object.entries(groups).find(([, names]) => names.includes(workoutName))?.[0] || "";
}

function setDraftWorkoutGroup(workoutName, targetGroup) {
  const groups = getRoutineDraft().schedule.groups;
  Object.values(groups).forEach((names) => {
    const index = names.indexOf(workoutName);
    if (index !== -1) names.splice(index, 1);
  });
  if (targetGroup && Array.isArray(groups[targetGroup])) groups[targetGroup].push(workoutName);
}

function markRoutineDraftChanged(rerender = false) {
  dom.configStatus.textContent = "Unsaved changes.";
  if (!configJsonDirty) renderConfigEditor();
  if (rerender) renderRoutineEditor();
}

function setRoutineFormDisabled(disabled) {
  dom.routineEditor.inert = disabled;
  dom.routineEditor.classList.toggle("routine-editor-disabled", disabled);
  dom.routineWorkoutPicker.disabled = disabled;
  dom.addWorkoutBtn.disabled = disabled;
}

function renderConfigEditor() {
  if (configJsonDirty) return;
  dom.configEditor.value = JSON.stringify(getRoutineDraft(), null, 2);
}

function saveConfigFromEditor() {
  try {
    const candidate = configJsonDirty ? JSON.parse(dom.configEditor.value) : getRoutineDraft();
    state.config = normalizeConfig(candidate);
    state.selectedWorkoutName = state.config.cycleOrder.includes(state.selectedWorkoutName)
      ? state.selectedWorkoutName
      : state.config.cycleOrder[0];
    routineDraft = structuredClone(state.config);
    selectedRoutineWorkoutName = state.config.workouts.some((workout) => workout.name === selectedRoutineWorkoutName)
      ? selectedRoutineWorkoutName
      : state.config.workouts[0].name;
    configJsonDirty = false;
    setRoutineFormDisabled(false);
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
  dom.backupStatus.textContent = state.lastBackupExportedAt
    ? `Last exported ${formatDateTime(state.lastBackupExportedAt)}`
    : "No backup exported yet.";
}

function updateDeloadSettings() {
  state.config.deload = {
    enabled: dom.deloadEnabled.checked,
    everyCycles: Number(dom.deloadEvery.value || 4),
    targetReductionPercent: Number(dom.deloadReduction.value || 15)
  };
  if (routineDraft) routineDraft.deload = structuredClone(state.config.deload);
  persist();
  renderToday();
  renderConfigEditor();
}

function exportBackup() {
  const exportedAt = new Date().toISOString();
  state.lastBackupExportedAt = exportedAt;
  persist();
  renderToday();
  renderSettings();

  const backup = {
    exportedAt,
    app: "Lift Log",
    state: structuredClone(state)
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `lift-log-backup-${formatBackupFilenameDate(exportedAt)}.json`;
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
      state.history = Array.isArray(importedState.history) ? importedState.history.map(migrateSessionWorkoutName) : [];
      state.activeSession = importedState.activeSession ? migrateSessionWorkoutName(importedState.activeSession) : null;
      state.selectedWorkoutName = renameWorkout(importedState.selectedWorkoutName) || getNextWorkoutName(state);
      state.lastBackupExportedAt = importedState.lastBackupExportedAt || parsed.exportedAt || "";
      state.backupReminderDismissedAt = importedState.backupReminderDismissedAt || "";
      routineDraft = null;
      selectedRoutineWorkoutName = "";
      configJsonDirty = false;
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

function formatBackupFilenameDate(iso) {
  return iso.replaceAll(":", "-").replace(/\.\d{3}Z$/, "Z");
}

function isAfter(leftIso, rightIso) {
  if (!leftIso) return false;
  if (!rightIso) return true;
  return new Date(leftIso).getTime() > new Date(rightIso).getTime();
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
