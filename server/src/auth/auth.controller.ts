import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDtoType } from './dto';
import { LoginCustomerDtoType } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('customer-register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateCustomerDtoType) {
    return this.authService.registerCustomer(createUserDto);
  }

  @Post('customer-login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginCustomerDtoType) {
    return this.authService.loginCustomer(loginUserDto);
  }
  @Post('vendor-register')
  @HttpCode(HttpStatus.CREATED)
  async registerVendor(@Body() createUserDto: CreateCustomerDtoType) {
    return this.authService.loginVendor(createUserDto);
  }

  @Post('vendor-login')
  @HttpCode(HttpStatus.OK)
  async loginVendor(@Body() loginUserDto: LoginCustomerDtoType) {
    return this.authService.loginVendor(loginUserDto);
  }
}
