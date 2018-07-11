const mutation = {
  addDraft: (_, args, context, info) => {
    return context.prisma.mutation.createDraft(
      {
        data: {
          draftDate: args.draftDate,
          colors: args.colors,
          format: args.format,
          userId: {
            connect: {
              id: args.userId
            }
          }
        }
      },
      info
    );
  },
  addMatch: (_, args, context, info) => {
    return context.prisma.mutation.createMatch(
      {
        data: {
          matchNum: args.matchNum,
          gamesWon: args.gamesWon,
          gamesLost: args.gamesLost,
          matchWon: args.matchWon,
          draftId: {
            connect: {
              id: args.draftId
            }
          }
        }
      },
      info
    );
  }
};

module.exports = { mutation };
