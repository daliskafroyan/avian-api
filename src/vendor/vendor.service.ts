import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendorService {
  constructor(private prisma: PrismaService) {}
  async create(createVendorDto: CreateVendorDto) {
    const createData = await this.prisma.vendor.create({
      data: createVendorDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  async findAll() {
    const dataTasks = await this.prisma.vendor.findMany({});
    return {
      statusCode: 200,
      data: dataTasks,
    };
  }

  async findOne(id: number) {
    const dataTask = await this.prisma.vendor.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  async update(id: number, updateTaskDto: UpdateVendorDto) {
    const updateTask = await this.prisma.vendor.update({
      data: updateTaskDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }

  async remove(id: number) {
    const deleteTask = await this.prisma.vendor.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: deleteTask,
      message: `Success delete ${id}`,
    };
  }
}
