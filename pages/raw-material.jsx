"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const rawMaterials = {
    Marble: ["Makrana White", "Vietnam White", "Rajnagar White", "Banswara White"],
    Granite: ["South Black", "Black Galaxy", "Bhenslana Black"],
    Sandstone: ["Bansi Paharpur Pink", "Dholpur Red", "Mint Sandstone", "Jaisalmer"],
};

export default function RawMaterialsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Raw Materials
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.entries(rawMaterials).map(([category, items]) => (
                    <Card
                        key={category}
                        className="rounded-2xl p-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <CardHeader className="bg-gradient-to-r from-theme via-[#ff9d5c] to-[#ffb380] text-white rounded-t-2xl">
                            <CardTitle className="text-2xl">{category}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-3">
                            {items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 bg-white rounded-lg border hover:bg-gray-50 transition cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
