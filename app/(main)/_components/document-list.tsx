"use client";

import { Doc,Id} from "@/convex/_generated/dataModel";

interface DocumentListProps{
    parentDocument?:Id<"documents">;
}

export const DocumentList = () => {
    return (
        <div>
            Document List
        </div>
    )
}