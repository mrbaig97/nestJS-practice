import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
      private studentservice: StudentService
  ){}
    @Get("findall")
    findall(){
     return this.studentservice.findall();
    }

    @Get("findById")
    findById(@Query('id') id){
     return this.studentservice.findByID(id);
    }

    @Post("adddata")
    adddata(@Body("fname") fname,@Body('lname') lname){
        // console.log(students)
        return this.studentservice.adddata(fname,lname);
    }
}
