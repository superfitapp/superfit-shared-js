import { MovementType, MovementPlane, MovementCategory } from './MovementModule';
export declare class BaseExerciseDefinition {
    id: number;
    title: string;
    slug: string;
    protected movementType: string;
    protected category: string;
    protected plane: string;
    isBodyweight: boolean;
    athleticIndex: number;
    demoUrl: string;
    unilateral: boolean;
    getBlock(): MovementType;
    setBlock(movementType: MovementType): void;
    getPlane(): MovementPlane;
    setPlane(plane: MovementPlane): void;
    getCategory(): MovementCategory;
    setCategory(category: MovementCategory): void;
}
export default BaseExerciseDefinition;
