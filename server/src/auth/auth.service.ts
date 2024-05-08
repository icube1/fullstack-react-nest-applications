import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  LoginVendorDtoType,
  LoginCustomerDto,
  CreateCustomerDto,
  CreateVendorDtoType,
  LoginVendorDto,
  CreateCustomerDtoType,
  CreateVendorDto,
  LoginCustomerDtoType,
} from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async registerVendor(createVendorDto: CreateVendorDtoType) {
    const result = CreateVendorDto.safeParse(createVendorDto);
    if (!result.success) {
      throw new Error('Validation failed');
    }
    return { message: 'User registered successfully' };
  }

  async loginVendor(loginVendorDto: LoginVendorDtoType) {
    const result = LoginVendorDto.safeParse(loginVendorDto);
    if (!result.success) {
      throw new UnauthorizedException('Validation failed');
    }
    const payload = {
      email: loginVendorDto.email,
      password: loginVendorDto.password,
    };
    const token = this.jwtService.sign(payload);
    return { message: 'Login successful', access_token: token };
  }

  async registerCustomer(createCustomerDto: CreateCustomerDtoType) {
    const result = CreateCustomerDto.safeParse(createCustomerDto);
    if (!result.success) {
      throw new Error('Validation failed');
    }
    return { message: 'User registered successfully', code: 201 };
  }

  async loginCustomer(loginCustomerDto: LoginCustomerDtoType) {
    const result = LoginCustomerDto.safeParse(loginCustomerDto);
    if (!result.success) {
      throw new UnauthorizedException('Validation failed');
    }
    const payload = {
      email: loginCustomerDto.email,
      password: loginCustomerDto.password,
    };
    const token = this.jwtService.sign(payload);
    return { message: 'Login successful', access_token: token };
  }
}
