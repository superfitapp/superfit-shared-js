export class BaseCoach {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  title: string;
  revisionDate: Date;
  slug: string;
}

export enum ExerciseBlock {
  Warmup = "Warmup",
  Drills = "Drills",
  Cooldown = "Cooldown",
  PowerStrength = "PowerStrength",
  Conditioning = "Conditioning"
}

export enum WorkoutType {
  Addon = "Addon",
  PowerStrength = "PowerStrength",
  Conditioning = "Conditioning"
}

export enum Season {
  OffSeason = "OffSeason",
  InSeason = "InSeason",
  PostSeason = "PostSeason",
  AllSeason = "AllSeason"
}

export class ExerciseGoal {
  slug: string;
  title: string;
  inputs: [ActiveExerciseInput];
  primaryInput: ActiveExerciseInput;
}
export enum Level {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Pro = "Pro"
}

export enum ActiveExerciseInput {
  Reps = "Reps",
  Weight = "Weight",
  Duration = "Duration"
}

export enum MovementType {
  Static = "Static",
  Dynamic = "Dynamic",
  HPush = "HPush",
  HPull = "HPull",
  LBPush = "LBPush",
  LBPull = "LBPull",
  LPushPull = "LPushPull",
  HPushPull = "HPushPull",
  VPull = "VPull",
  VPush = "VPush"
}

export enum MovementPlane {
  Saggital = "Saggital",
  Transverse = "Transverse",
  Frontal = "Frontal",
  Multi = "Multi"
}

export enum MovementCategory {
  Mobility = "Mobility",
  Stability = "Stability",
  Plyometric = "Plyometric",
  Power = "Power",
  Strength = "Strength",
  Movement = "Movement",
  Condition = "Condition"
}

export interface IProgramCatalog {
  id: number;
  title: string;
  sport: string;
  summary: string;
  numberOfWeeks: number;
  tagline: string;
  level: string;
  season: string;
  revisionDate: Date;
  publishDate?: Date;
  creationDate: Date;
  isLive: boolean;
  seriesOrder: number;
  slug: string;
  version: number;
  coach: BaseCoach;
  workoutCatalogs: IWorkoutCatalog[]
}

export class BaseProgramCatalog implements IProgramCatalog {

  id: number;
  title: string;
  sport: string;
  summary: string;
  numberOfWeeks: number;
  tagline: string;
  level: string;
  season: string;
  revisionDate: Date;
  publishDate?: Date;
  creationDate: Date;
  isLive: boolean;
  seriesOrder: number;
  slug: string;
  version: number;
  coach: BaseCoach;
  workoutCatalogs: IWorkoutCatalog[]

  getLevel(): Level {
    return Level[this.level]
  }
  setLevel(level: Level) {
    this.level = Level[level]
  }

  static fromJson(json: JSONDict): BaseProgramCatalog {

    let newProgramCatalog = new BaseProgramCatalog()
    newProgramCatalog.title = json["title"]
    newProgramCatalog.sport = json["sport"]
    newProgramCatalog.summary = json["summary"]
    newProgramCatalog.tagline = json["tagline"]
    newProgramCatalog.level = json["level"]
    newProgramCatalog.numberOfWeeks = json["numberOfWeeks"]
    newProgramCatalog.season = json["season"]
    newProgramCatalog.isLive = json["isLive"] || false
    newProgramCatalog.seriesOrder = json["seriesOrder"]
    newProgramCatalog.slug = json["slug"]
    newProgramCatalog.version = json["version"]

    let workoutCatalogsJson = json["workoutCatalogs"] as [JSONDict]
    var workoutCatalogs: BaseWorkoutCatalog[] = []

    // parse workouts 
    // NOT DONE YET
    if (workoutCatalogsJson) {

      for (let workoutCatalogJson of workoutCatalogsJson) {
        let workoutCatalog = new BaseWorkoutCatalog()
        workoutCatalogs.push(workoutCatalog)
      }

      newProgramCatalog.workoutCatalogs = workoutCatalogs
    }

    // parse coach
    let coachJson = json["coach"]

    if (coachJson) {
      let coachSlug = coachJson["slug"]
      if (coachSlug) {
      }
    }
    return newProgramCatalog
  }
}


export abstract class IWorkoutCatalog {
  id: number;
  slug: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  version: number;
  programCatalog?: IProgramCatalog;
  exerciseCatalogs: IExerciseCatalog[]
}

export class BaseWorkoutCatalog implements IWorkoutCatalog {

  id: number;
  slug: string;
  title: string;
  type: string;
  publishDate?: Date;
  revisionDate: Date;
  creationDate: Date;
  version: number;
  programCatalog?: IProgramCatalog;
  exerciseCatalogs: IExerciseCatalog[]

  getType(): WorkoutType {
    return WorkoutType[this.type]
  }

  setType(type: WorkoutType) {
    this.type = WorkoutType[type]
  }
}

export interface IExerciseCatalog {
  id: number;
  block: string;
  goal: ExerciseGoal;
  sets: number;
  rpe: number;
  blockOrder: number;
  priority: number;
  reps?: number;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight: number;
  duration?: number;
  workoutCatalog: IWorkoutCatalog;
  definition: IExerciseDefinition;
}

export class BaseExerciseCatalog implements IExerciseCatalog {

  block: string;
  id: number;
  goal: ExerciseGoal;
  sets: number;
  rpe: number;
  blockOrder: number;
  priority: number;
  reps?: number;
  manualWeight?: number;
  percentBodyweight?: number;
  percentMaxWeight: number;
  duration?: number;
  workoutCatalog: IWorkoutCatalog;
  definition: IExerciseDefinition;

  getBlock(): ExerciseBlock {
    return ExerciseBlock[this.block]
  }
  setBlock(block: ExerciseBlock) {
    this.block = ExerciseBlock[block]
  }
}

export interface IExerciseDefinition {

  id: number;
  title: string;
  slug: string;
  movementType: string
  category: string;
  plane: string;
  isBodyweight: boolean;
  athleticIndex: number;
  demoUrl: string;
  unilateral: boolean;

}

export class BaseExerciseDefinition implements IExerciseDefinition {

  id: number;
  title: string;
  slug: string;
  movementType: string
  category: string;
  plane: string;
  isBodyweight: boolean;
  athleticIndex: number;
  demoUrl: string;
  unilateral: boolean

  getMovementType(): MovementType {
    return MovementType[this.movementType]
  }
  setMovementType(movementType: MovementType) {
    this.movementType = MovementType[movementType]
  }

  getPlane(): MovementPlane {
    return MovementPlane[this.plane]
  }
  setPlane(plane: MovementPlane) {
    this.plane = MovementPlane[plane]
  }

  getCategory(): MovementCategory {
    return MovementCategory[this.category]
  }
  setCategory(category: MovementCategory) {
    this.category = MovementCategory[category]
  }

  static fromJson(json: JSONDict): BaseExerciseDefinition {
    let newExerciseDefinition = new BaseExerciseDefinition()
    newExerciseDefinition.id = json['id']
    newExerciseDefinition.title = json['title']
    newExerciseDefinition.slug = json['slug']
    newExerciseDefinition.movementType = json['movementType']
    newExerciseDefinition.category = json['category']
    newExerciseDefinition.plane = json['plane']
    newExerciseDefinition.isBodyweight = json['isBodyweight']
    newExerciseDefinition.athleticIndex = json['athleticIndex']
    newExerciseDefinition.demoUrl = json['demoUrl']
    newExerciseDefinition.unilateral = json['unilateral']

    return newExerciseDefinition
  }
}

export interface JSONDict {
  [key: string]: any
}