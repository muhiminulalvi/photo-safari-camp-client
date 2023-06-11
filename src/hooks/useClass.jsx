import { useQuery } from "@tanstack/react-query";


const useClass = () => {
    const { refetch, data: classData = [] } = useQuery({
        queryKey: ['classData'],
        queryFn: async () => {
            const res = await fetch('https://photo-safari-camp-server.vercel.app/classes')
            return res.json()
        }
    })
    return [classData, refetch];
};

export default useClass;