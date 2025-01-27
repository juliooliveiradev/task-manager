import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.create(task);
  }
}
