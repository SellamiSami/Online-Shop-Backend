import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose"

export type CategoryDocument = Category & Document;
@Schema()
export class Category {
    @Prop()
    title: string

    @Prop()
    description: String

}

export const CategorySchema = SchemaFactory.createForClass(Category)
