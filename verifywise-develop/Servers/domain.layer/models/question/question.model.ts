import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { SubtopicModel } from "../subtopic/subtopic.model";

/*

This is the new Question model(Schema) and will be replaced with the new one.
Please align other files with this

*/
export type Question = {
  id?: number; // auto generated by database
  order_no?: number; // gets assigned from the structure
  question: string; // gets assigned from the structure
  hint: string; // gets assigned from the structure
  priority_level: "high priority" | "medium priority" | "low priority"; // gets assigned from the structure
  answer_type: string; // gets assigned from the structure
  input_type: string; // gets assigned from the structure
  evidence_required: boolean; // gets assigned from the structure
  is_required: boolean; // gets assigned from the structure
  dropdown_options?: any[]; // gets assigned from the structure
  evidence_files?: Object[]; // gets assigned from the structure
  answer?: string; // won't get any values, will be filled by user
  subtopic_id: number; // when subtopic is created, its id will be stored and assign here as FK
  created_at?: Date;
  status?: "Not started" | "In progress" | "Done";
};

@Table({
  tableName: "questions",
})
export class QuestionModel extends Model<Question> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
  })
  order_no?: number;

  @Column({
    type: DataType.STRING,
  })
  question!: string;

  @Column({
    type: DataType.STRING,
  })
  hint!: string;

  @Column({
    type: DataType.ENUM("high priority", "medium priority", "low priority"),
  })
  priority_level!: "high priority" | "medium priority" | "low priority";

  @Column({
    type: DataType.STRING,
  })
  answer_type!: string;

  @Column({
    type: DataType.STRING,
  })
  input_type!: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  evidence_required!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_required!: boolean;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  dropdown_options?: any[];

  @Column({
    type: DataType.JSONB,
  })
  evidence_files?: {
    id: string;
    fileName: string;
    project_id: number;
    uploaded_by: number;
    uploaded_time: Date;
  }[];

  @Column({
    type: DataType.STRING,
  })
  answer?: string;

  @ForeignKey(() => SubtopicModel)
  @Column({
    type: DataType.INTEGER,
  })
  subtopic_id!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_demo?: boolean;

  @Column({
    type: DataType.DATE,
  })
  created_at?: Date;

  @Column({
    type: DataType.ENUM("Not started", "In progress", "Done"),
  })
  status?: "Not started" | "In progress" | "Done";
}
