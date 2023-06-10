import { useQuery } from "@tanstack/react-query";


const useClass = () => {
    const { refetch, data: classData = [], isLoading: loading } = useQuery({
        queryKey: ['classData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
    })
    return [classData, refetch];
};

export default useClass;