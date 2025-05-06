// src/auth/auth.controller.ts
import { Controller, Post, UseGuards, Req,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Req() req: any) {
    // Example: store token in blacklist (not implemented here)
    return { message: 'Logged out successfully (client should delete token)' };
  }
}
