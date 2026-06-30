import { Input, Button } from "@heroui/react";
import type { ChangeEvent } from "react";

interface PinAuthProps {
  value: string;
  onChange: (value: string) => void;
  onComplete: () => void;
  onCancel: () => void;
  error: boolean;
}

export const PinAuth = ({ value, onChange, onComplete, onCancel, error }: PinAuthProps) => {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[320px]">
      <div className="text-center">
        <h3 className="text-xl font-bold dark:text-white uppercase tracking-widest">
          Acceso Admin
        </h3>
        <p className={`text-[10px] font-bold uppercase ${error ? "text-red-500" : "text-slate-400"}`}>
          {error ? "Código incorrecto, reintente" : "Ingrese su PIN de 4 dígitos"}
        </p>
      </div>
      
      <Input
        type="password"
        maxLength={4}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value.replace(/[^0-9]/g, '');
          onChange(val);
        }}
        placeholder="----"
        className="text-center"
        autoFocus
      />

      <div className="flex w-full gap-3">
        <Button className="flex-1 font-bold" onClick={onCancel}>
          Cancelar
        </Button>
        <Button className="flex-1 font-bold bg-inochi-lime text-black" onClick={onComplete}>
          Ingresar
        </Button>
      </div>
    </div>
  );
};