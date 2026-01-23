import { Send, Phone, Mail, Clock } from "lucide-react";
import {cn} from "@/lib/utils";
const  CardQuote = ({title,description,icon:Icon,type }) => {

    return (
        <div className="bg-muted rounded-xl p-5 flex items-start gap-4">
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",type === "primary" ? "bg-primary" : "bg-accent")}>
                <Icon className={cn("w-5 h-5",type === "primary" ? "text-primary-foreground" : "text-accent-foreground")} />
            </div>
            <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </div>
    )
} 

export default CardQuote;