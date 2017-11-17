interface IProgramCatalog {
  id: number;
  title: string;
  sport: string;
  summary: string;
  numberOfWeeks: number;
  tagline: string;
  levelEnum: Level;
  revisionDate: Date;
  publishDate: Date;
  isLive: boolean;
  creationDate: Date;
  seriesOrder: number;
  slug: string;
  version: number;
  coach: Coach;
  workoutCatalogs: WorkoutCatalog[]
}