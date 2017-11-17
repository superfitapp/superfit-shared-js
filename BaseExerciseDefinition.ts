import { MovementType, MovementPlane, MovementCategory } from './MovementModule';

export class BaseExerciseDefinition {
  id: number;
  title: string;
  slug: string;
  protected movementType: string


  protected category: string;

  protected plane: string;
  isBodyweight: boolean;
  athleticIndex: number;
  demoUrl: string;
  unilateral: boolean

  getBlock(): MovementType {
    return MovementType[this.movementType]
  }
  setBlock(movementType: MovementType) {
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
}


export default BaseExerciseDefinition;
