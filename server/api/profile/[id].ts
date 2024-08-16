export default defineEventHandler(event => {
  const throwApiIdError = () => {
    const ERROR_MESSAGE = "Forneça um id de usuário válido";

    throw createError({
      statusCode: 400,
      statusMessage: ERROR_MESSAGE
    });
  };

  const idParam = getRouterParam(event, "id") || "";

  const parsedId = Number(idParam);

  const isIdANumber = !isNaN(parsedId);

  if (!isIdANumber) {
    throwApiIdError();
  }

  const foundDentist = mockedDentists.find(
    currentUser => currentUser.id === parsedId
  );

  if (!foundDentist) {
    throwApiIdError();
  }

  return {
    dentist: foundDentist
  };
});

const mockedDentists = [
  {
    id: 123,
    picture: "/images/dentists/dentist-1.jpg",
    name: "John Doe",
    role: "Dr.",
    specialty: "Especialista em Endodontia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget massa interdum, semper risus eu, iaculis mi. Donec eleifend volutpat ligula at blandit. Mauris imperdiet est in fermentum venenatis. Nam eros neque, semper ut dui vitae, malesuada luctus nisi. Pellentesque semper leo vitae dolor tincidunt placerat. Maecenas purus lacus, tincidunt sit amet euismod id, venenatis vel mauris. Donec tempus egestas semper. Nulla commodo, diam at luctus auctor, ante urna semper nunc, nec volutpat purus erat at felis. Donec ornare, arcu a facilisis faucibus, tortor magna mattis massa, vel ornare eros.",
    medias: [
      {
        mediaType: "image",
        url: "/images/patients/patient-1.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-2.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-16.mp4"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-3.jpg"
      }
    ],
    trustStatus: {
      statusLevel: 95,
      isVerified: true,
      secureContact: true,
      secureProfile: true
    }
  },
  {
    id: 456,
    picture: "/images/dentists/dentist-2.jpg",
    name: "Jane Doe",
    role: "Dra.",
    specialty: "Especialista em Dentística",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget massa interdum, semper risus eu, iaculis mi. Donec eleifend volutpat ligula at blandit. Mauris imperdiet est in fermentum venenatis. Nam eros neque, semper ut dui vitae, malesuada luctus nisi. Pellentesque semper leo vitae dolor tincidunt placerat. Maecenas purus lacus, tincidunt sit amet euismod id, venenatis vel mauris. Donec tempus egestas semper. Nulla commodo, diam at luctus auctor, ante urna semper nunc, nec volutpat purus erat at felis. Donec ornare, arcu a facilisis faucibus, tortor magna mattis massa, vel ornare eros.",
    medias: [
      {
        mediaType: "image",
        url: "/images/patients/patient-1.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-2.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-16.mp4"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-3.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-4.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-5.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-6.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-17.mp4"
      }
    ],
    trustStatus: {
      statusLevel: 50,
      isVerified: true,
      secureContact: false,
      secureProfile: false
    }
  },
  {
    id: 789,
    picture: "/images/dentists/dentist-3.jpg",
    name: "John Smith",
    role: "Dr.",
    specialty: "Especialista em Harmonização orofacial",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    medias: [
      {
        mediaType: "image",
        url: "/images/patients/patient-1.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-2.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-16.mp4"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-3.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-4.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-5.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-6.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-7.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-8.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-9.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-10.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-17.mp4"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-11.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-12.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-13.jpg"
      },
      {
        mediaType: "video",
        url: "/images/patients/patient-18.mp4"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-14.jpg"
      },
      {
        mediaType: "image",
        url: "/images/patients/patient-15.jpg"
      }
    ],
    trustStatus: {
      statusLevel: 20,
      isVerified: false,
      secureContact: false,
      secureProfile: false
    }
  }
];
