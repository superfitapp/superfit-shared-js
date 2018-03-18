export class BaseCoach {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  title: string;
  revisionDate: Date;
  slug: string;
}

export enum ProgramCatalogAvailability {
  Pro = "pro",
  Free = "free"
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
  revisionDate: number;
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
  title: string;
  sport: string;
  summary: string;
  availability: string;
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
  title: string;
  sport: string;
  summary: string;
  availability: string;
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
    newProgramCatalog.availability = json["availability"]
    newProgramCatalog.publishDate = json["publishDate"]
    newProgramCatalog.numberOfWeeks = json["numberOfWeeks"]
    newProgramCatalog.season = json["season"]
    newProgramCatalog.isLive = json["isLive"] || false
    newProgramCatalog.seriesOrder = json["seriesOrder"]
    newProgramCatalog.slug = json["slug"]
    newProgramCatalog.version = json["version"]

    let workoutCatalogsJson = json["workoutCatalogs"] as [JSONDict]
    var workoutCatalogs: BaseWorkoutCatalog[] = []

    if (workoutCatalogsJson) {

      for (let workoutCatalogJson of workoutCatalogsJson) {
        let workoutCatalog = BaseWorkoutCatalog.fromJson(workoutCatalogJson)
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

  static fromJson(json: JSONDict): BaseWorkoutCatalog {

    let newWorkoutCatalog = new BaseWorkoutCatalog()
    newWorkoutCatalog.publishDate = json["publishDate"]
    newWorkoutCatalog.revisionDate = json["revisionDate"]
    newWorkoutCatalog.creationDate = json["creationDate"]
    newWorkoutCatalog.version = json["version"]
    newWorkoutCatalog.slug = json["slug"]
    newWorkoutCatalog.title = json["title"]
    newWorkoutCatalog.type = json["type"]

    let exerciseCatalogsJson = json["exerciseCatalogs"] as [JSONDict]
    var exerciseCatalogs: BaseExerciseCatalog[] = []

    if (exerciseCatalogsJson) {

      for (let exerciseCatalogJson of exerciseCatalogsJson) {
        let exerciseCatalog = BaseExerciseCatalog.fromJson(exerciseCatalogJson)
        exerciseCatalogs.push(exerciseCatalog)
      }

      newWorkoutCatalog.exerciseCatalogs = exerciseCatalogs
    }

    return newWorkoutCatalog;
  }
}

export interface IExerciseCatalog {
  block: string;
  external_id?: string;
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
  exerciseDefinitionSlug: string
  workoutCatalog?: IWorkoutCatalog;
}

export class BaseExerciseCatalog implements IExerciseCatalog {

  block: string;
  external_id: string
  exerciseDefinitionSlug: string
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

  getBlock(): ExerciseBlock {
    return ExerciseBlock[this.block]
  }
  setBlock(block: ExerciseBlock) {
    this.block = ExerciseBlock[block]
  }

  static fromJson(json: JSONDict): BaseExerciseCatalog {

    let newExerciseCatalog = new BaseExerciseCatalog()
    newExerciseCatalog.block = json["block"]
    newExerciseCatalog.external_id = json["external_id"]
    newExerciseCatalog.goal = json["goal"]
    newExerciseCatalog.sets = json["sets"]
    newExerciseCatalog.rpe = json["rpe"]
    newExerciseCatalog.blockOrder = json["blockOrder"]
    newExerciseCatalog.priority = json["priority"]
    newExerciseCatalog.reps = json["reps"]
    newExerciseCatalog.manualWeight = json["manualWeight"]
    newExerciseCatalog.percentBodyweight = json['percentBodyweight']
    newExerciseCatalog.percentMaxWeight = json['percentMaxWeight']
    newExerciseCatalog.duration = json['duration']
    newExerciseCatalog.exerciseDefinitionSlug = json['exerciseDefinitionSlug']

    return newExerciseCatalog;
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
  demo_preview_url?: string;
  demo_youtube_id?: string;
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
  unilateral: boolean;
  demo_preview_url?: string;
  demo_youtube_id?: string;

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
    newExerciseDefinition.demo_youtube_id = json['demo_youtube_id']
    newExerciseDefinition.demo_preview_url = json['demo_preview_url']
    newExerciseDefinition.unilateral = json['unilateral']

    return newExerciseDefinition
  }
}

export interface JSONDict {
  [key: string]: any
}

export enum ExerciseGoalType {
  MoreWeight = "more-weight",
  LessWeight = 'less-weight',
  MoreReps = 'more-reps',
  LessReps = 'less-reps',
  MorePower = 'more-power',
  SpeedQuickness = 'speed-and-quickness',
  DynamicMobility = 'dynamic-mobility',
  DynamicStability = 'dynamic-stability',
  AMGRAP = 'amgrap',
  LongerDuration = 'longer-duration',
  ShorterDuration = 'shorter-duration',
  SlowerPace = 'slower-pace',
  FasterPace = 'faster-pace',
  StaticMobility = 'static-mobility',
  StaticStability = 'static-stability',
  Technique = 'technique',
  Custom = 'custom'
}

export interface IProgramCatalogCatalogSeries {
  id: string;
  order: number;
  program_catalog: IProgramCatalog
  catalog_series: ICatalogSeries
}

export interface ICatalogSeries {
  id: string;
  banner_image_url: string;
  title: string;
  description: string;
  program_catalog_catalog_series: IProgramCatalogCatalogSeries[];
  coach: BaseCoach;
}

export interface ICatalogSection {
  id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  description: string;
  is_live: boolean;
  main_image_url: string;
  badge_image_url: string;
  catalog_series: ICatalogSeries[];
}