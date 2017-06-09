export default {
  title: 'টেপা',
  type: 'object',
  required: ['graam', 'holding-number', 'poribar-prodhan', 'pita-shami', 'mom'],
  properties: {
    graam: {
      title: 'গ্রাম',
      type: 'string'
    },
    ward: {
      title: 'ওয়ার্ড',
      type: 'integer',
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    para: {
      title: 'পাড়া',
      type: 'string'
    },
    'holding-number': {
      title: 'হোল্ডিং নাম্বার',
      type: 'integer'
    },
    mobile: {
      title: 'মোবাইল নাম্বার',
      type: 'string'
    },
    aykor: {
      title: 'আয়কর দাতা',
      type: 'boolean'
    },
    'poribar-prodhan': {
      title: 'পরিবার প্রধান এর নাম',
      type: 'string'
    },
    'pita-shami': {
      title: 'পিতা/স্বামির নাম',
      type: 'string'
    },
    mom: {
      title: 'মাতার নাম',
      type: 'string'
    },
    'blood-group': {
      title: 'রক্তের গ্রুপ',
      type: 'string',
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    religion: {
      title: 'ধর্ম',
      type: 'string',
      enum: ['ইসলাম', 'সনাতন', 'খ্রিস্টান', 'বৌদ্ধ', 'অন্যান্য']
    },
    dob: {
      title: 'জন্ম তারিখ',
      type: 'string',
      format: 'date'
    },
    'edu-qual': {
      title: 'শিক্ষাগত যোগ্যতা',
      type: 'string',
      enum: [
        'অক্ষরজ্ঞানহীন',
        '৩য় / ৪র্থ',
        '৫ম',
        'অষ্টম',
        'এস এস সি',
        'এইচ এস সি',
        'বিএ / সমমান',
        'বিএসসি ইঞ্জিনিয়ারিং',
        'এমবিবিবিএস',
        'এম এ / সমমান'
      ]
    },
    occupation: {
      title: 'পেশা',
      type: 'string',
      enum: [
        'কৃষি',
        'ব্যবসা',
        'চাকরি',
        'গাড়ি চালক',
        'দিন মজুর',
        'ভিক্ষুক',
        'অন্যন্য'
      ]
    },
    gender: {
      title: 'লিঙ্গ',
      type: 'string',
      enum: ['পুরুষ', 'মহিলা', 'উভয় লিঙ্গ']
    },
    'monthly-income': {
      title: 'মাসিক আয়',
      type: 'integer'
    },
    'job-desc': {
      title: 'কাজের বিবরণ',
      type: 'string'
    },
    'NID-BC': {
      title: 'জাতীয় পরিচয়পত্র/জন্ম নিবন্ধন',
      type: 'string'
    },
    married: {
      title: 'বৈবাহিক অবস্থা',
      type: 'string',
      enum: ['বিবাহিত', 'অবিবাহিত', 'বিধবা']
    },
    health: {
      title: 'স্বাস্থ্যগত অবস্থা',
      type: 'string',
      enum: ['যক্ষা', 'ডায়াবেটিস', 'এইডস', 'ক্যান্সার', 'কুষ্ঠ', 'অন্যান্য']
    },
    wall: {
      title: 'দেওয়াল কীসের তৈরী',
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'পাতা',
          'পাটখড়ি',
          'বাঁশ',
          'চাটাই',
          'মাটি',
          'টিন',
          'ইট',
          'অন্যান্য'
        ]
      },
      uniqueItems: true
    },
    chala: {
      title: 'চালা কীসের তৈরী',
      type: 'string',
      enum: ['টালি', 'টিন', 'খড়', 'ছন', 'পাকা ছাদ', 'অন্যান্য']
    },
    'number-of-homes': {
      title: 'বসত বাড়ির পরিমাণ',
      type: 'integer'
    },
    'home-cost': {
      title: 'বসত বাড়ির মূল্য',
      type: 'integer'
    },
    latrine: {
      title: 'ল্যাট্রিন',
      type: 'boolean'
    },
    tubewell: {
      title: 'নলকূপ',
      type: 'boolean'
    },
    electricity: {
      title: 'বিদ্যুৎ',
      type: 'boolean'
    },
    'elec-source': {
      title: 'বিদ্যুতের উৎস',
      type: 'string',
      enum: ['পল্লী বিদ্যুৎ', 'পিডিবি', 'সৌর বিদ্যুৎ', 'বায়ো গ্যাস']
    },
    'agro-instrument': {
      title: 'কৃষি যন্ত্রপাতি',
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'ডিজেল চালিত মেশিন',
          'ডিপ টিউবওয়েল',
          'ট্রাক্টর',
          'পাওয়ার ট্রিলার',
          'বৈদ্যুতিক মটর',
          'স্প্রে মেশিন',
          'ধান মাড়াই মেশিন',
          'ধান কাটা মেশিন',
          'মাছ ধরার জাল',
          'নৌকা',
          'অন্যান্য'
        ]
      },
      uniqueItems: true
    },
    'land-amount': {
      title: 'জমির পরিমাণ শতাংশে',
      type: 'object',
      properties: {
        krishi: {
          title: 'কৃষি',
          type: 'string'
        },
        'bash-jhar': {
          title: 'বাঁশঝার',
          type: 'string'
        },
        pukur: {
          title: 'পুকুর',
          type: 'string'
        },
        onabadi: {
          title: 'অনাবাদী',
          type: 'string'
        },
        'bondhok-neoa': {
          title: 'বন্ধক নেওয়া',
          type: 'string'
        },
        'bondhok-deoa': {
          title: 'বন্ধক দেওয়া',
          type: 'string'
        },
        'dokhole-rakha': {
          title: 'দখলে রাখা',
          type: 'string'
        },
        onnanno: {
          title: 'অন্যান্য',
          type: 'string'
        }
      }
    },
    cattle: {
      title: 'গবাদী পশুর তথ্য',
      type: 'object',
      properties: {
        goru: {
          title: 'গরু',
          type: 'integer'
        },
        mohish: {
          title: 'মহিষ',
          type: 'integer'
        },
        bhera: {
          title: 'ভেড়া',
          type: 'integer'
        },
        chagol: {
          title: 'ছাগল',
          type: 'integer'
        },
        murgi: {
          title: 'মুরগী',
          type: 'integer'
        },
        hash: {
          title: 'হাঁস',
          type: 'integer'
        },
        onnanno: {
          title: 'অন্যান্য',
          type: 'integer'
        }
      }
    },
    kitnashok: {
      title: 'বীজ ও কীটনাশক',
      type: 'object',
      properties: {
        dokan: {
          title: 'দোকান',
          type: 'string'
        },
        bds: {
          title: 'বিডিএস',
          type: 'string'
        },
        dealer: {
          title: 'অনুমোদিত ডিলার',
          type: 'string'
        },
        onnanno: {
          title: 'অন্যান্য',
          type: 'string'
        }
      }
    },
    'car-info': {
      title: 'মোটর গাড়ির তথ্য',
      type: 'object',
      properties: {
        'car-license': {
          title: 'গাড়ির লাইসেন্স',
          type: 'boolean'
        },
        'driving-license': {
          title: 'ড্রাইভিং লাইসেন্স',
          type: 'boolean'
        },
        cars: {
          title: 'মোটর গাড়ি সমূহ',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'মটর বাইক',
              'মাইক্রোবাস',
              'কার',
              'জিপ',
              'অটোবাইক',
              'ট্রাক',
              'অন্যান্য'
            ]
          },
          uniqueItems: true
        }
      }
    },
    mamla: {
      title: 'মামলা',
      type: 'array',
      items: {
        type: 'string',
        enum: ['দেওয়ানী মামলা', 'ফৌজদারী মামলা', 'সহায়তা পেয়েছে']
      },
      uniqueItems: true
    },
    orphan: {
      title: 'এতিম শিশু',
      type: 'object',
      properties: {
        name: {
          title: 'নাম',
          type: 'string'
        },
        age: {
          title: 'বয়স',
          type: 'integer'
        },
        'no-dad': {
          title: 'পিতৃ হারা',
          type: 'boolean'
        },
        'no-mom': {
          title: 'মাতৃ হারা',
          type: 'boolean'
        },
        accident: {
          title: 'উক্ত পরিবারের দুর্ঘটনা জনিত মৃত্যু',
          type: 'boolean'
        },
        'organ-damage': {
          title: 'দুর্ঘটনায় অঙ্গহানি',
          type: 'boolean'
        }
      }
    },
    maid: {
      title: 'গৃহ কর্মী',
      type: 'object',
      properties: {
        name: {
          title: 'নাম',
          type: 'string'
        },
        age: {
          title: 'বয়স',
          type: 'integer'
        },
        address: {
          title: 'ঠিকানা',
          type: 'string'
        },
        gender: {
          title: 'লিঙ্গ',
          type: 'string',
          enum: ['নারী', 'পুরুষ']
        }
      }
    },
    'quota-info': {
      title: 'অন্যান্য',
      type: 'object',
      properties: {
        'freedom-fighter': {
          title: 'পরিবারে মুক্তিযোদ্ধা আছে',
          type: 'boolean'
        },
        upojati: {
          title: 'উপজাতি',
          type: 'boolean'
        },
        '0-to-15-child': {
          title: '০-১৫ মাস পর্যন্ত বয়সী শিশু আছে',
          type: 'boolean'
        },
        tika: {
          title: 'থাকলে টিকা নেয় কিনা',
          type: 'boolean'
        },
        'is-voter': {
          title: 'ইউনিয়নে ভোটার অন্তভূক্ত',
          type: 'boolean'
        },
        'how-many-votes': {
          title: 'হলে ভোট সংখ্যা কত',
          type: 'integer'
        }
      }
    },
    'family-head-loans': {
      title: 'পরিবার প্রধান ও অন্যান্য সদস্যদের ঋন সম্পর্কিত তথ্য',
      type: 'object',
      properties: {
        'youth-develop': {
          title: 'যুব উন্নয়ন',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        bdrb: {
          title: 'বিডিআরবি',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        women: {
          title: 'মহিলা',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'social-works': {
          title: 'সমাজসেবা',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'co-op': {
          title: 'সমবায়',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        brac: {
          title: 'ব্র্যাক',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        asha: {
          title: 'আশা',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'bari-khamar': {
          title: '১টি বাড়ি ১টি খামার',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'grameen-bank': {
          title: 'গ্রামীন ব্যাংক',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'krishi-bank': {
          title: 'কৃষি ব্যাংক',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        },
        'others': {
          title: 'অন্যান্য',
          type: 'object',
          properties: {
            amount: {
              title: 'ঋনের পরিমান',
              type: 'string'
            },
            date: {
              title: 'গ্রহনের তারিখ',
              type: 'string',
              format: 'date'
            }
          }
        }
      }
    },
    'family-head-trainings': {
      title: 'পরিবার প্রধান ও অন্যান্য সদস্যদের প্রশিক্ষণ সম্পর্কিত তথ্য',
      type: 'object',
      properties: {
        'youth-develop': {
          title: 'যুব উন্নয়ন',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        bdrb: {
          title: 'বিডিআরবি',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        'social-works': {
          title: 'সমাজ সেবা',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        poverty: {
          title: 'দারিদ্র মোচন',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        'co-op': {
          title: 'সমবায়',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        women: {
          title: 'মহিলা বিষয়ক',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        livestock: {
          title: 'প্রাণী সম্পদ',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        krishi: {
          title: 'কৃষি',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        'ansar-vdp': {
          title: 'আনসার-ভিডিপি',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        },
        'others': {
          title: 'অন্যান্য',
          type: 'object',
          properties: {
            training: {
              title: 'প্রশিক্ষণের নাম',
              type: 'string'
            }
          }
        }
      }
    },
    'public-services': {
      title: 'সরকারী দপ্তর/ইউপি/অন্যান্য দপ্তর থেকে প্রদানকৃত সুবিধাদির তথ্য',
      type: 'object',
      properties: {
        vgd: {
          title: 'ভিজিডি',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        vdf: {
          title: 'ভিডিএফ',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        '40-days': {
          title: '৪০ দিন কর্মসূচী',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        'maternity-allowance': {
          title: 'মাতৃত্ব ভাতা',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        'disablity-allowance': {
          title: 'প্রতিবন্ধী ভাতা',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        elderly: {
          title: 'বয়স্ক',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        widow: {
          title: 'বিধবা',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        'freedom-fighter': {
          title: 'মুক্তিযোদ্ধা',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        },
        others: {
          title: 'অন্যান্য',
          type: 'object',
          properties: {
            'service': {
              title: 'সেবার নাম',
              type: 'string'
            }
          }
        }
      }
    }
  }
}
