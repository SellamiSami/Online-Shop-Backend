import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { SousCategoryModule } from './sous-category/sous-category.module';
@Module({
  imports: [CategoriesModule,MongooseModule.forRoot(
    "mongodb+srv://admin:admin@cluster0.jeuieto.mongodb.net/?retryWrites=true&w=majority"), SousCategoryModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
