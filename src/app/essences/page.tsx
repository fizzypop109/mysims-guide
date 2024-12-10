import {DataContainer} from "@/app/_components/DataContainer/DataContainer";
import {essences} from "@/app/data/essences";

export default function EssencePage() {
    return (
        <div className="gradient">
            <DataContainer title="Essences" data={essences} />
        </div>
    );
}
