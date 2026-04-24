// savings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGoalFromTemplateDto } from './dto/create-goal-from-template.dto';

@Injectable()
export class SavingsService {
  constructor(
    // inject your repositories here
    // private templateRepo: TemplateRepository,
    // private goalRepo: GoalRepository,
  ) {}

  async createFromTemplate(
    templateId: number,
    dto: CreateGoalFromTemplateDto,
  ) {
    // 1. Fetch template
    const template = await this.getTemplateById(templateId);

    if (!template) {
      throw new NotFoundException('Template not found');
    }

    // 2. Merge template defaults with overrides
    const goalData = {
      name: dto.name ?? template.name,
      amount: dto.amount ?? template.amount,
      duration: dto.duration ?? template.duration,
      // add more fields if needed
    };

    // 3. Create new goal
    const newGoal = await this.createGoal(goalData);

    return {
      message: 'Goal created successfully',
      data: newGoal,
    };
  }

  // 🔹 Mocked methods (replace with DB logic)
  private async getTemplateById(id: number) {
    return {
      id,
      name: 'Emergency Fund',
      amount: 100000,
      duration: 6,
    };
  }

  private async createGoal(data: any) {
    return {
      id: Math.floor(Math.random() * 100000),
      ...data,
      createdAt: new Date(),
    };
  }
}
