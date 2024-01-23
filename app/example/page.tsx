export default function page() {
    return (
        <div className="container mx-auto my-auto flex h-screen items-center justify-center bg-slate-400">
            <div className="h-56 w-96 overflow-hidden border border-red-700">
                <div className="relative h-72 border-2 border-green-500 duration-500 hover:-translate-y-16">
                    <img className="h-full" src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
                    <div className="absolute bottom-4 left-2">
                        <h2 className="text-3xl font-bold text-black">Dubai</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
