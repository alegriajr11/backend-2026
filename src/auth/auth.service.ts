import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RoleEnum } from 'src/common/enums/role.enum';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsuariosService))
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService,
    ) { }

    async register(dto: RegisterDto) {
        const passwordHash = await bcrypt.hash(dto.password, 10);
        
        const user = await this.usuariosService.createUser(
            {
                username: dto.username,
                email: dto.email,
                passwordHash,
                roleName: RoleEnum.USER
            }
        )
        const payload =
        {
            sub: user.id,
            username: user.username,
            role: user.role.name
        };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
