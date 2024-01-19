import { ReactNode } from "react";

type TConteinerPorps = {
    children: ReactNode
}

const Containers = ({ children }: TConteinerPorps ) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto">
          {children}
        </div>
    );
};
export default Containers;