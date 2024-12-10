import {DataContainer} from "@/app/_components/DataContainer/DataContainer";
import {sims} from "@/app/data/sims";

export default function SimPage() {
    return (
        <div className="gradient">
            <DataContainer title="Sims" data={sims} />
        </div>
    );
}
