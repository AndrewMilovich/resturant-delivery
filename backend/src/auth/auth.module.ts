import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../core/prisma.service';
import { TokenModule } from './token/token.module';
import { TokenService } from './token/token.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UserService,
    TokenService,
    JwtService,
  ],
})
export class AuthModule {}
