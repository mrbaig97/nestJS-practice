import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
         @InjectRepository(Student) 
         private studentrepo: Repository<Student>
    ){}
    findall(){
    //    return this.studentrepo.find();
    return this.studentrepo.createQueryBuilder().getMany();
    }
    findByID(id){
        //    return this.studentrepo.find();
        // return this.studentrepo.createQueryBuilder('s')
        // .where("s.id =:id",{id:id})
        // .getOne();
    return this.studentrepo.findOne({id:id})    
    }

    adddata(fname,lname){
        const student = new Student();
        student.fname = fname;
        student.lname = lname;
        return this.studentrepo.save(student);
    }

}
