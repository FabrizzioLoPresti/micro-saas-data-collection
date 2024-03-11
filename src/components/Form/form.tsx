"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

type Props = {};

const FormComponent = (props: Props) => {
  return (
    <div className="max-w-[600px] max-h-[600px] p-8 border border-zinc-300 bg-neutral-50 shadow-2xl">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-blue-800 before:content-['-___'] after:content-['___-']">
          Pregunta
        </h3>
        <p>
          4 <span className="font-bold text-blue-800">de</span> 10
        </p>
      </div>

      <div className="h-full">
        <div className="w-full my-6 flex flex-row items-center justify-between">
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-8">
          <h4 className="text-blue-800 font-bold text-2xl text-center">
            ¿Cuál es tu siguiente Proyecto?
          </h4>

          <div>
            <RadioGroup defaultValue="comfortable">
              <ul className="[&>li]:border-t-2 [&>li:nth-child(odd)]:border-t-blue-800 [&>li:nth-child(even)]:border-t-blue-200">
                <li className="py-3 px-6 flex items-center gap-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Aplicación Web</Label>
                </li>

                <li className="py-3 px-6 flex items-center gap-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Aplicación Móvil</Label>
                </li>
                <li className="py-3 px-6 flex items-center gap-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Aplicación de Escritorio</Label>
                </li>
                <li className="py-3 px-6 flex items-center gap-x-2">
                  <RadioGroupItem value="compact" id="r4" />
                  <Label htmlFor="r4">Otro</Label>
                </li>
              </ul>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
