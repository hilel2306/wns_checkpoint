

import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";


const ADD_COUNTRY = gql`
mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      code
      emoji
    }
  }
`;

const AddCountryForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY);

    const handleFormSubmit = async (formData) => {
        console.log("🚀 ~ handleFormSubmit ~ formData:", formData)
        try {
            const { data } = await addCountry({
                variables: {
                    data: formData
                }
            });
            console.log(data)
            reset();
        } catch (error) {
            console.error("Erreur lors de l'ajout du pays :", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-1/2 mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nom du pays</label>
                <input type="text" id="name" {...register("name", { required: true })} className="form-input mt-1 block w-full" />
                {errors.name && <span className="text-red-500">Le nom du pays est requis</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="code" className="block text-gray-700">Code du pays</label>
                <input type="text" id="code" {...register("code", { required: true })} className="form-input mt-1 block w-full" />
                {errors.code && <span className="text-red-500">Le code du pays est requis</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="emoji" className="block text-gray-700">Emoji du pays</label>
                <input type="text" id="code" {...register("emoji", { required: true })} className="form-input mt-1 block w-full" />
                {errors.emoji && <span className="text-red-500">L'emoji du pays est requis</span>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
        </form>
    );
};

export default AddCountryForm;
